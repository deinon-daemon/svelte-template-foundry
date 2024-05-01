<script>
    import InputDialog from "$lib/components/Input/InputDialog.svelte";
    import CommonPage from "$lib/components/CommonPage.svelte";
    import ChipButton from "$lib/components/Chip/ChipButton.svelte";
    import {isBlank} from "@riadh-adrani/utils";
    import {onMount} from 'svelte';


    let gif = "https://media.giphy.com/media/3o7btOfPKQb7mCLxBu/giphy.gif";

    onMount(() => {
        const container = document.querySelector('div#sign-up-container');
        const theme = document.querySelector('html').getAttribute('data-theme');
        //console.log('Theme: ', theme);

        if (theme !== 'dark') {
            gif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2QwYm1vaGNrbjBlMDNhcTJmMGp0N20xcTR4bnZ5dTlybmI3bDhqciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D5Pol6qyMRnLGFkoVT/source.gif";
        }


        container.style.background = `url(${gif}) center bottom`;
        // lmao "https://media.giphy.com/media/839DsJwSJTIo5kG6D5/giphy.gif"
        // also good https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemdzNHpsNjh6dDlvb280bHVkYThuNHp3OTkwZTh4czhuOWNxN3I4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qoJ9sZu2Xui9a/giphy.gif
        container.style.width='100%';
    });

    const isEmail = (email) => {
        const reg =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return !isBlank(email) && reg.test(email);
    };

    let email = ''
    let username = ''


    function handleSubmit(event) {
        console.log(event.target.email.value)
        //console.log(event.target.username.value)
        console.log(isEmail(event.target.email.value));
        //username = event.target.username.value;
        email = event.target.email.value;
    }

</script>

<div id="sign-up-container" class="flex flex-row flex-1 self-center justify-center">

    <form class="flex flex-row flex-1 justify-center" on:submit|preventDefault={handleSubmit} style="margin-top:100px">
        <ul style='list-style:none;'>
            <li>
                <h1 class="flex flex-row flex-1 self-center justify-center" style="margin-top:2%">Sign up for our newsletter!</h1>
            </li>
            <li>
                <div class="flex flex-row flex-1 self-center justify-center" style="margin-top:5%">
                    <InputDialog id="email" placeholder="Email" ></InputDialog>
                </div>
            </li>

            <li>
                <div class="flex flex-row flex-1 self-center justify-center" style="margin-top:2%">
                    <ChipButton size={'1.25em'}> Sign Up</ChipButton>
                </div>
            </li>

            <li>
                {#if email}
                    <div class="flex flex-row flex-1 self-center justify-center" style="margin-top:2%">
                        Thank you for your interest! Check your inbox {email} for a welcome email!
                    </div>
                {/if}
            </li>
        </ul>
    </form>
</div>

