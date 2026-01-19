<div class="layout-container">
    <div class="drawer"></div>
    <div class="chat-area"></div>
    <div class="cards-area"></div>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .layout-container {
        display: grid;
        grid-template-columns: 260px 1fr 300px;
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
    }

    .drawer {
        background-color: #f0f0f0;
        border-right: 1px solid #ccc;
    }

    .chat-area {
        background-color: #ffffff;
    }

    .cards-area {
        background-color: #f9f9f9;
        border-left: 1px solid #ccc;
    }
</style>
