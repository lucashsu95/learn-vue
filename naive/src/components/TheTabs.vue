<script setup>
import { NCard, NTabs, NTabPane, NFormItemRow } from 'naive-ui';

</script>
<template>
    <n-card title="歌曲" style="margin-bottom: 16px">
        <n-tabs type="line" animated>
            <n-tab-pane name="oasis" tab="Oasis">
                Wonderwall
            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="the Beatles">
                Hey Jude
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="周杰伦">
                七里香
            </n-tab-pane>
        </n-tabs>
    </n-card>
    
</template>

