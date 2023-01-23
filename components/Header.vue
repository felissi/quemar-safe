
import { NuxtLink } from '~~/.nuxt/components';

<template>
  <header class="h-[139px] bg-white">
    <div class="m-auto max-w-[1024px]">
      <div class="flex h-[89px] items-center">
        <div class="flex items-center justify-center">
          <img src="/bbqlogo.png" class="block h-16 w-16" alt="" />
        </div>
      </div>
      <div class="flex h-[50px] px-2">
        <ul class="ant-menu ant-menu-light ant-menu-root ant-menu-horizontal" role="menu" style="list-style-type: none; margin: 0; padding: 0">
          <li aria-label="主頁" class="ant-menu-item ant-menu-item-only-child ant-menu-item-selected float-left m-1" role="menuitem">
            <NuxtLink aria-current="page" to="/" class="font-bold text-sm">主頁</NuxtLink>
          </li>
          <li aria-label="最新消息" class="ant-menu-item ant-menu-item-only-child float-left m-1" role="menuitem">
            <NuxtLink to="/whatsnews" class="font-bold text-sm">最新消息</NuxtLink>
          </li>
          <li aria-label="宣傳資料" class="ant-menu-item ant-menu-item-only-child float-left m-1" role="menuitem">
            <NuxtLink to="/publication" class="font-bold text-sm">宣傳資料</NuxtLink>
          </li>
          <li aria-label="常用連結" class="ant-menu-item ant-menu-item-only-child float-left m-1" role="menuitem">
            <NuxtLink to="/useful-links" class="font-bold text-sm">常用連結</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
