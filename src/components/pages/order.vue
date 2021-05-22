<template>
    <div>

        <b-navbar class="bg-brown" toggleable="lg" type="dark">
            <b-navbar-brand class="padding-none" to="/"><img src="@/assets/pic/luluflora.png" width="180"></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto"> </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>


