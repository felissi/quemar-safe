<template>
  <div id="list" class="relative overflow-x-auto shadow-2xl sm:rounded-lg"
  >

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3" :colspan="sheetStore.maxCols">
                    Product
                    <span class="sr-only">Edit</span>

                </th>
                <!-- <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th> -->
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="row in sheetStore.sheet"
            >
                <!-- <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th> -->
                <td class="px-6 py-4" v-for="cell in row">
                    {{  cell  }}
                </td>
                <!-- <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> -->
            </tr>
        </tbody>
    </table>


  </div>
</template>
<script lang="ts">
import { sheetMixin } from '@/stores/imports/SheetMixin'
export default {
  mixins: [sheetMixin],
  beforeMount() {
    this.sheetStore.fetch()
  }
}
</script>