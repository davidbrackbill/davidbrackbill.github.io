<script>
    import pdf from '$lib/assets/brackbill_resume.pdf';
    import png from '$lib/assets/brackbill_resume.png';
</script>

<h2><a href={pdf} download>Download a PDF</a></h2>
<embed src={png}>

<style>
    embed {
        max-width: 800px;
        min-width: 300px;
    }
</style>
