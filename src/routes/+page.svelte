<script>
	import { goto } from '$app/navigation';

	export let userId = null;
	let error = null;

	async function handleSubmit(e) {
		e.preventDefault();
		const input = e.target.querySelector('input');
		userId = input.value;

		try {
			const res = await fetch(`https://chat-service.svc.beta.tori.fi/chatbot?userId=${userId}`);
			const data = await res.json();

		if(!res.ok){
			error = "User does not exists";
			throw new Error("No data available");
		}

		goto(`/chat/${userId}`);

		} catch (error) {
			console.error(error);
		}finally{
			input.value = "";}
	}

</script>

<svelte:head>
	<title>Tori Customer Chat bot</title>
	<meta name="description" content="tori customer chat bot" />
</svelte:head>

<main>
	<div>
		<h1>Customer Support</h1>
		<img src="logo.png" alt="tori logo" id="logo">

		<form action="" on:submit={handleSubmit}>
			<label for="">Please enter your user ID to start the chat</label>
			<input type="text" placeholder="Your ID" autofocus >
		</form>

	<p class={error ? 'error':""}>User does not exists</p>

	</div>
</main>

<style>
	h1{
		margin: 0 auto;
		font-size: 2em;
		text-align: center;
	}


div {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	padding: 1em;

}

.error{
	opacity: 1;
	color: red;
}

p{opacity: 0;}
</style>