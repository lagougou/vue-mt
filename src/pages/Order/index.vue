<template>
    <div>
        <Header></Header>
        <List></List>
    </div>
</template>
<script>
import Header from './header';
import List from './orderlist';

export default {
    name: 'order',
    components: {
        Header,
        List,
    }
}
</script>