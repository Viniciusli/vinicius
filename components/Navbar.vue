<template>
  <div class="navbar font-sans">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl">Vinicius Lee</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><a href="/">Home</a></li>
        <li><a href="#skills">Skills</a></li>
          <!-- <li><a>Education</a></li>
          <li><a>Contact Me</a></li> -->
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn btn-ghost">Resume</a>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 bg-[#f7f9fb] shadow rounded-boxs w-52">
            <li><a href="/">Home</a></li>
            <li><a href="#skills">Skills</a></li>
          <!-- <li><a>Education</a></li>
          <li><a>Contact Me</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>