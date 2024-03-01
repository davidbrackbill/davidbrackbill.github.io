<script>
    import { base } from '$app/paths';
</script>

<body>
<div class="wrap">
    <header class="side-flex">
        <h1 class="header-home">
            <a href="{base}/">David Brackbill</a>
        </h1>
        <ul class="header-links">
            <li><a href="{base}/projects">Projects</a></li>
            <li><a href="{base}/blog">Blog</a></li>
            <li><a href="https://github.com/davidbrackbill">Github</a></li>
            <li><a href="https://www.linkedin.com/in/brackbill">LinkedIn</a></li>
        </ul>
    </header>

    <slot />
</div>
</body >

<style>

header { 
    padding: 0px 0px 20px 0px; 
}

:global(.side-flex) {
    display:flex;
    width:fit-content;
    margin:auto;
    align-items: center;
}

.wrap {
    width: 60% 1;
    max-width: 45em;
    margin: 0 auto;
    position: relative;
    min-height: 100%;
    /* border: 1px red solid; */
    height: auto;
}

.header-home {
    align-self: center;
}

.header-links {
    position: absolute;
    margin: 2em 15em;
    padding-top: 3em;
}

ul {
  justify-content: flex-end;
  list-style-type: none;
  padding: 10px 0px 0px 0px;
  width: 60px;
}


</style>
