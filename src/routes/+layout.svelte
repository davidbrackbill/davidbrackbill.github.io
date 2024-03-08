<script>
    import { base } from '$app/paths';
    import "../app.css";
</script>

<div class="max-w-2xl w-3/5 relative h-auto min-h-full">
    <header class="flex w-fit m-auto items-center pb-5">
        <h1>
            <a href="{base}/">David Brackbill</a>
        </h1>
        <ul class="absolute my-8 mx-60
        justify-end list-none pl-2.5 w-16">
            <li><a href="{base}/projects">Projects</a></li>
            <li><a href="{base}/blog">Blog</a></li>
            <li><a href="https://github.com/davidbrackbill">Github</a></li>
            <li><a href="https://www.linkedin.com/in/brackbill">LinkedIn</a></li>
        </ul>
    </header>

    <slot />
</div>
