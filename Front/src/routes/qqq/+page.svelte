<script>
	export let data;
</script>

<h1>blog</h1>

<ul>
	<li><a href="/qqq/one">one</a></li>
	<li><a href="/qqq/two">two</a></li>
	<li><a href="/qqq/three">three</a></li>
	{#each data.summaries as { slug, title }}
		<li><a href="/qqq/{slug}">{title}</a></li>
	{/each}
</ul>