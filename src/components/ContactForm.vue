<template>
	<div class="flex flex-col gap-4 md:gap-8">
		<div class="flex flex-col lg:flex-row gap-4 md:gap-8">
			<input placeholder="Name*">
			<input placeholder="Email*">
		</div>
		<textarea placeholder="Your Comment" rows="10" />
		<button class="bg-gold mt-4 self-start">Publish</button>
	</div>
</template>

<style>
    input, textarea {
        border: 1px solid #D1D1D1;
        padding: 1rem;
        border-radius: 8px;
        width: 100%;
    }
</style>