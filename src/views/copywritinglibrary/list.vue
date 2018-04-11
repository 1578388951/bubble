<template>
	<el-row class="activity-list">
		<el-col :span="24">
			<el-col :span="12">
				<el-input v-model="search" placeholder="文案名称"></el-input>
				<el-button type="primary" plain>搜索</el-button>
			</el-col>
			<el-col :span="12" style="text-align: right">
				<el-button type="primary">新建</el-button>
			</el-col>
		</el-col>
		<el-col :span="24" style="margin:20px 0">
			<el-button @click="toggleSelection(tableData3)">全选</el-button>
			<el-button>删除</el-button>
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
						align="center"
						type="selection"
						width="55">
				</el-table-column>
				<el-table-column
						width="200"
						show-overflow-tooltip
						label="文案名称">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
						prop="name"
						width="200"
						label="创建时间">
					<template slot-scope="scope">
						<i class="iconfont" style="color: yellow;cursor: pointer">&#xe6d5;</i>2018-22-22
					</template>
				</el-table-column>
				<el-table-column
						align="center"
						label="文案内容">
					<template slot-scope="scope">
						<el-input
								type="textarea"
								:rows="2"
								placeholder="请输入内容"
								v-model="textarea">
						</el-input>
					</template>
				</el-table-column>
				<el-table-column
						label="操作"
						width="130"
						align="center">
					<template slot-scope="scope">
						<el-col :span="8" style="text-align: center">
							<b style="cursor: pointer">删除</b>
						</el-col>
						<el-col :span="8" style="text-align: center">
							<b style="cursor: pointer">编辑</b>
						</el-col>
						<el-col :span="8" style="text-align: center">
							<b style="cursor: pointer">保存</b>
						</el-col>
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
                textarea:'',
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
		.iconfont{
			font-family:"iconfont" !important;
			font-size:16px;font-style:normal;
			-webkit-font-smoothing: antialiased;
			-webkit-text-stroke-width: 0.2px;
			-moz-osx-font-smoothing: grayscale;
		}
	}
</style>