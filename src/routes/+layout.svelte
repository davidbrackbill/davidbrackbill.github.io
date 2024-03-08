<script>
    import { base } from '$app/paths';
    import "../app.css";
</script>

<header class="flex w-fit m-auto pb-4 pt-10">
    <a class="font-bold text-2xl"
       href="{base}/">David Brackbill</a>
    <ul class="relative -right-3 ">
        <li><a href="{base}/projects">Projects</a></li>
        <li><a href="{base}/blog">Blog</a></li>
        <li><a href="https://github.com/davidbrackbill">Github</a></li>
        <li><a href="https://www.linkedin.com/in/brackbill">LinkedIn</a></li>
    </ul>
</header>

<slot />
