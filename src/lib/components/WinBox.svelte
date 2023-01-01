<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';
	import type WinBox from 'winbox/src/js/winbox.js';

	let WinBox: WinBox.WinBoxConstructor;
	let data: HTMLElement;
	let className: string | undefined = '';

	export let title: string = 'Winbox Svelte Title';
	export let border: string | number | undefined = 0;
	export let background: string | undefined = "'#28292d'";
	export let x: string | number | undefined = 0;
	export let y: string | number | undefined = 0;
	export let modal: boolean = false;
	export let modern: boolean = false;
	export let white: boolean = false;
	export let onclose: ((this: WinBox, force?: boolean | undefined) => boolean) | undefined = () => {
		open = false
		return true
	}


	export let width: string | number | undefined = '';
	export let height: string | number | undefined = '';
	export let top: string | number | undefined = '';
	export let right: string | number | undefined = '';
	export let bottom: string | number | undefined = '';
	export let left: string | number | undefined = '';

	export { className as class };
	
	export let open = false;

	onMount(async () => {
		await import('winbox/dist/css/winbox.min.css');
		await import('winbox/dist/css/themes/modern.min.css');
		await import('winbox/dist/css/themes/white.min.css');
		const winboxModule = await import('winbox/src/js/winbox.js');
		WinBox = winboxModule.default;
		createWindow()
	});
	
	onDestroy(() => {
		instance?.close()
	})
	
	$: isOpen = instance != null && open
	
	$: {
		isOpen
		checkOpen()
	}
	
	let instance: WinBox = null
	
	async function checkOpen () {
		if (!instance) return
		if (isOpen) {
			await tick()
			instance.mount(data)
			instance.show()
		} else {
			instance.hide()
		}
	}

	function createWindow(): void {
		if (!instance) {
			instance = new WinBox(title, {
				border,
				background,
				x,
				y,
				width,
				height,
				top,
				right,
				bottom,
				left,
				modal,
				hidden: true,
				class: `${modern ? 'modern' : white ? 'white' : className ? `${className}` : ''}`,
				onclose,
			});
		}
	}
</script>

{#if isOpen}
<div bind:this={data}>
	<slot />
</div>
{/if}
