<page>
    <flexboxLayout class="bg-zinc-950 flex-col items-center justify-center">
        <label text="Garotos" class="text-zinc-50 text-center text-3xl font-bold" />
        <label text="de" class="text-zinc-50 text-center text-3xl font-bold" />
        <label text="Programa" class="text-zinc-50 text-center text-3xl mb-10 font-bold" />

        <flexboxLayout class="w-10/12 bg-[#434343] flex-col justify-center py-10 px-7 rounded-3xl">
            <label text="Email:" class="text-zinc-50 mb-2 font-bold" />
            <textField class="h-10 bg-zinc-300 rounded-xl mb-4 px-2 text-[#434343]" text="" />
            <label text="Senha:" class="text-zinc-50 mb-2 font-bold" />
            <textField class="h-10 bg-zinc-300 rounded-xl mb-8 px-2 text-[#434343]" text="" secure="true" />
						<label text="Repetir senha:" class="text-zinc-50 mb-2 font-bold" />
            <textField class="h-10 bg-zinc-300 rounded-xl mb-8 px-2 text-[#434343]" text="" secure="true" />
						<checkBox text="CheckBox Label" checked="false"/>
						<switch bind:checked="{programmer}" class="text-white" on:checkedChange={() => onCheckedChange(0)} /><label text="Programador" class="text-zinc-50 mb-2 font-bold"  />
						<switch bind:checked="{customer}" class="text-white" on:checkedChange={() => onCheckedChange(1)}/><label text="Client" class="text-zinc-50 mb-2 font-bold"  />

            <button class="w-9/12 py-5 align-center bg-zinc-300 rounded-xl mb-8 text-[#434343]" text="Entrar" />
            <flexboxLayout class="flex-row justify-between px-px rounded-3xl">
                <button class="text-gray-300 bg-transparent elevation-none text-left font-bold text-xl" text="Login" />
                <button class="text-gray-300 bg-transparent elevation-none text-right font-bold text-xl" text="Sign up" on:tap="{ () => navigate({ page: SignUp }) }"/>
            </flexboxLayout>
        </flexboxLayout>
    </flexboxLayout>
</page>

<script>
    import SignUp from './SignUp.svelte'
	import { navigate } from 'svelte-native'

		let programmer = false;
		let customer = false;

    let logged = false;
    let message = "Texto muito doido";
    let app_name = "Garotos de Programa";

		function onCheckedChange(type) {
			if(type == 1){
				customer = true;
				programmer = false;
			} else {
				programmer = true;
				customer = false;
			}
		}
</script>

<style>
    /* .info {
        font-size: 20;
    } */
</style>
