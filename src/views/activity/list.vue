<template>
    <el-row class="activity-list">
        <el-col :span="24">
            <el-col :span="12">
                <el-input v-model="search" placeholder="活动名称或ID"></el-input>
                <el-button type="primary" plain>搜索</el-button>
            </el-col>
            <el-col :span="12" style="text-align: right">
                <el-button type="primary" @click="createactivity">新建活动</el-button>
            </el-col>
        </el-col>
        <el-col :span="24" style="margin:20px 0">
            <el-col :span="8">
                <el-button @click="toggleSelection(tableData3)">全选</el-button>
                <el-button>删除</el-button>
            </el-col>
            <el-col :span="16" style="text-align: center">
                <b>长期 {{isLongtime}}</b>
            </el-col>

        </el-col>
        <el-col :span="24">
            <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    stripe
                    border
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        show-overflow-tooltip
                        label="活动名称">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="活动	ID">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="活动位置"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        align="center"
                        label="活动时间"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="130"
                        align="center">
                    <template slot-scope="scope">
                        <el-col :span="12" style="text-align: center">
                            <b style="cursor: pointer">编辑</b>
                        </el-col>
                        <el-col :span="12" style="text-align: center">
                            <b style="cursor: pointer">复制</b>
                        </el-col>
                    </template>
                </el-table-column>
                <el-table-column
                        label="状态"
                        width="130"
                        align="center">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="status"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                        <strong>启用中</strong>
                    </template>
                </el-table-column>

            </el-table>
        </el-col>
    </el-row>
</template>
<script>
    // import { getUserList } from '../../api/api';

    export default {
        data() {
            return {
                search:'',
                status:true,
                isLongtime:'----',
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row,true);
                    });
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //新建活动
            createactivity(){
                this.$router.push({ path: '/createactivity' })
            }

        },
        mounted() {

        }
    };

</script>

<style lang="scss">
    .activity-list{
        .el-input{
            width: 200px;
        }
    }
</style>