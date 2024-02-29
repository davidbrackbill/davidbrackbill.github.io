<script>
    import { base } from '$app/paths';
</script>

<div id="wrap">
    <header>
        <h1>
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

<style>

header { 
    padding: 0px 0px 20px 0px; 
}

#wrap {
    width: 60% 1;
    max-width: 45em;
    margin: 0 auto;
    position: relative;
    min-height: 100%;
    /* border: 1px red solid; */
    height: auto;
}

header {
  display:bock;
  width:fit-content;
  margin:auto;
}

.header-links {
    text-align: right;
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 1em 35px;
}

ul {
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 60px;
}

li a {
  display: block;
}

</style>
