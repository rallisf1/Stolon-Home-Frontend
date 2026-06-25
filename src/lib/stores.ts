import { writable } from 'svelte/store';

export let previousUrl = writable('');
export let chatStore = writable({ isOpen: false, prompt: '' });