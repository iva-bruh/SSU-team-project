<script lang="ts">
    import AddButton from '../../components/commons/AddButton.svelte';
import {isAuth} from '../../stores/auth'
</script>

<div class="container mx-auto">
    {#if $isAuth}
    <AddButton>Добавить</AddButton>
    {/if}
</div>
    