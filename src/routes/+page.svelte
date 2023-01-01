<head>
    <!-- <link rel="preload" href="winbox.bundle.min.js" as="script"> -->
    <!-- <link rel="stylesheet" href="/node_modules/winbox/dist/css/winbox.min.css"> -->
</head>

<script lang="ts" type='module'>
    import {onMount, tick} from 'svelte'
    // import { browser } from '$app/environment';
	import Winbox from '$lib/components/WinBox.svelte';
    import { RangeSlider } from '@skeletonlabs/skeleton';
    let createWindow: () => void;
    let open = false;
    let val = 9;
    // let ch : HTMLElement;

    onMount( async () => {
        // await tick()
        console.log('hh') 
    })

    // console.log(browser)
    // console.log(WinBox)
    // let w1 = WinBox.new('alaa1121aa')
    // let w2 = WinBox.new('alaa1')

    

</script>

<div class="p-8">
	<button
		class="bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition"
		on:click={() => open = true}>Open Window</button
	>
	<button
		class="bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition"
		on:click={() => open = false}>Open Window</button
	>
	<Winbox x="200" y="200" bind:open>
		<div class=" p-4">
			<input type=range bind:value={val} min=0 max=10>
		</div>
        <p>{val}</p>
	</Winbox>
    <p>{val}</p>
    <input type=range bind:value={val} min=0 max=10>
    <p>{val}</p>
    <!-- <input type=range bind:value={val} min=0 max=10> -->
</div>