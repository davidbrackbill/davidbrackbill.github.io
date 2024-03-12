<script>
    import { base } from '$app/paths';
</script>

<div class="flex items-start w-fit m-auto pb-4">

    <div class="sticky mt-32 top-0">
        <ul class="monospace w-12 justify-start">
            <li><a href="#2024">2024</a></li>
            <li><a href="#2023">2023</a></li>
        </ul>
    </div>

    <div><!--Align splash and articles as siblings-->

   <!--Splash-->
    <div class="pl-6 mb-4">
        <h1>Writing on the technical spectrum</h1>
        <p>I do technical blogging about Python, Postgres, and distributed systems. I also post relevant tidbits about the learning process for systems programming and UI frameworks like Svelte.</p>
    </div>

   <!--Articles-->
    <div class="pl-6 border-l-1-w">
        <h2 id="2024">2024</h2>
        <div class="article">
            <a href="{base}/psql_poly">Polymorphic functions in Postgres</a>
            <time datetime="2024-02-29">24.02.29</time>
            <p>Intro to polymorphism / What's different in postgres / Why they're nice / How to use them</p>
        </div>


        <div class="article">
            <a href="{base}/python_gc">Garbage collection in Python</a>
            <time datetime="2024-02-29">24.02.29</time>
            <p>Python has GC? / When? / Why? / What does this mean for app devs?</p>
        </div>


        <h2 id="2023">2023</h2>
        <div class="article">
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

h2 {
    @apply mb-2 text-xl font-semibold;
}

.monospace a {
    font-family: ui-monospace;
}

.border-l-1-w {
    border-left: 1px solid white;
}

.article {
    margin-bottom: 0.5rem;
}

.article p {
    margin-top: 0.25rem;
}

.article a {
    font-size: 1.125rem;
}

time {
    font-style: italic;
    font-size: 14px;
    margin-left: 0.25rem;
}

</style>
