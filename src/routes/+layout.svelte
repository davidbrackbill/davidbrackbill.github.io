<script>
    import { base } from '$app/paths';
</script>

<header>
    <h1>
        <a href="{base}/">David Brackbill</a>
    </h1>
    <nav>
        <a href="{base}/">Home</a>
        <a href="{base}/resume">Resume</a>
        <a href="{base}/projects">Projects</a>
        <a href="{base}/blog">Blog</a>
    </nav>
</header>

<slot />
