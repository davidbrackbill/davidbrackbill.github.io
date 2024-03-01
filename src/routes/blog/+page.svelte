<script>
    import { base } from '$app/paths';
</script>

<div class="side-flex align-start">

    <div class="nav-text nav-sticky">
        <ul>
            <li><a href="#2024">2024</a></li>
            <li><a href="#2023">2023</a></li>
    </div>

    <div><!--Align splash and articles as siblings-->

   <!--Splash-->
    <div class="article-offset">
        <h1>Writing on the technical spectrum</h1>
        <p>I do technical blogging about Python, Postgres, and distributed systems. I also post relevant tidbits about the learning process for systems programming and UI frameworks like Svelte.</p>
    </div>

   <!--Articles-->
    <div class="article-offset article-border">
        <h2 id="2024">2024</h2>
        <div>
            <a href="{base}/psql_poly">Polymorphic functions in Postgres</a>
            <time datetime="2024-02-29">24.02.29</time>
            <p>Intro to polymorphism / What's different in postgres / Why they're nice / How to use them</p>
        </div>


        <div>
            <a href="{base}/python_gc">Garbage collection in Python</a>
            <time datetime="2024-02-29">24.02.29</time>
            <p>Python has GC? / When? / Why? / What does this mean for app devs?</p>
        </div>


        <h2 id="2023">2023</h2>
        <div>
            <a>Old post</a>
            <time datetime="2023-01-01">23.01.01</time>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
            <p>In medias res</p>
        </div>

    </div><!--Articles-->


    </div><!--Aligns splash and article as siblings-->

</div><!--side-flex-->


<style>

.align-start {
    align-items: flex-start;
}

.nav-sticky {
    position: sticky;
    top: 0;
    margin-top: 120px;
}

.nav-text a {
    text-decoration: none;
    font-family: ui-monospace;
    font-size: 16px;
}

.article-offset {
    padding-left: 24px;
}

.article-border {
    border-left: 1px solid white;
}

a {
    font-size: 20px;
}

time {
    font-style: italic;
    font-size: 14px;
}

ul {
  justify-content: flex-start;
  list-style-type: none;
  padding: 0px 0px 0px 0px;
  width: 60px;
}

</style>
