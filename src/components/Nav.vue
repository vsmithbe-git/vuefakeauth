<template>
<div class="bg-green-800 text-green-200">	
    <div class="container mx-auto flex justify-between items-center">
        <h1 class="tracking-tight text-3xl font-thin">Basic<span class="font-normal">Router</span>
        </h1>
        <nav>
            <ul class="flex space-x-4 w-full">
                <router-link to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-50 hover:text-green-800">Home</li></router-link>
                <router-link to="/about"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-50 hover:text-green-800">About</li></router-link>
                <router-link to="/hello"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-50 hover:text-green-800">Hello</li></router-link>
            </ul>
        </nav>
    </div>
</div>

</template>
