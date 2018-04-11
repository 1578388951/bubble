<template>
	<el-row class="createactivity">
		<el-col :span="24">
			<el-col :span="12" style="padding-right: 10px;">
				<el-col :span="24">
					<strong>活动名称</strong>
				</el-col>
				<el-col :span="24">
					<el-input v-model="activityname" placeholder="如：3.17瓜分活动"></el-input>
				</el-col>
			</el-col>
			<el-col :span="12" style="padding-left: 10px">
				<el-col :span="24">
					<strong>活动 ID</strong>
				</el-col>
				<el-col :span="24">
					<el-input v-model="activityid" disabled></el-input>
				</el-col>
			</el-col>
		</el-col>
		<el-col :span="24" style="margin-top: 20px;">
			<el-col :span="24">
				<strong>目标详情链接</strong>
			</el-col>
			<el-col :span="24">
				<el-input v-model="targetdetail"></el-input>
			</el-col>
		</el-col>
		<el-col :span="24" style="margin-top: 20px;">
			<strong>活动详情</strong>
		</el-col>
		<el-col :span="24" style="margin-top: 20px;">
			<el-col :span="6">
				<el-col :span="24">
					<strong>活动版位</strong>
				</el-col>
				<el-col :span="24">
					<el-radio-group v-model="radio"  :disabled="judge">
						<el-col :span="24" class="fence">
							<el-radio label="开屏" ></el-radio>
						</el-col>
						<el-col :span="24" class="fence">
							<el-radio label="资讯页弹窗"></el-radio>
						</el-col>
						<el-col :span="24" class="fence">
							<el-radio label="资讯页右下角图标"></el-radio>
						</el-col>
						<el-col :span="24" class="fence">
							<el-radio label="信息流首位"></el-radio>
						</el-col>
						<el-col :span="24" class="fence">
							<el-radio label="信息流第四位"></el-radio>
						</el-col>
						<el-col :span="24" class="fence">
							<el-radio label="信息流第八位"></el-radio>
						</el-col>
						<el-col :span="24" class="fence">
							<el-radio label="“我”页弹窗"></el-radio>
						</el-col>
					</el-radio-group>
					<el-checkbox-group v-model="checkList">
						<el-col :span="24" class="fence">
							<el-checkbox label="banner1"></el-checkbox>
						</el-col>
						<el-col :span="24" class="fence">
							<el-checkbox label="banner2"></el-checkbox>
						</el-col>
						<el-col :span="24" class="fence">
							<el-checkbox label="banner3"></el-checkbox>
						</el-col>
						<el-col :span="24" class="fence">
							<el-checkbox label="banner4"></el-checkbox>
						</el-col>
						<el-col :span="24" class="fence">
							<el-checkbox label="banner5"></el-checkbox>
						</el-col>
					</el-checkbox-group>
				</el-col>
			</el-col>
			<el-col :span="6">
				<el-col :span="24">
					<strong>创意形式</strong>
					<el-col>大小，png</el-col>
				</el-col>
			</el-col>
			<el-col :span="12">
				<el-col :span="24" style="text-align: center">
					<strong>版位图片</strong>
				</el-col>
				<el-col :span="24">
					<el-upload
							class="avatar-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							:show-file-list="false"
							ref="upload"
							:on-success="handleAvatarSuccess"
							:before-upload="beforeAvatarUpload">
						<template v-if="imageUrl" style="position: relative;">
							<div style="height: 300px;overflow: hidden">
								<img :src="imageUrl" class="avatar">
							</div>

						</template>
						<template v-else style="position: relative;">
							<div style="height: 300px;overflow: hidden">
								<i class="el-icon-plus avatar-uploader-icon"></i>
							</div>

						</template>
						<el-button>重新上传</el-button>
						<el-button  @click.stop="clearUpload">删除</el-button>
					</el-upload>
				</el-col>
				<el-col :span="24"  v-if="isinformation">
					<el-col :span="24" style="text-align: center">
						<strong>活动文案</strong>
					</el-col>
					<el-col :span="24">
						<el-input
								type="textarea"
								:rows="5"
								placeholder="请输入内容"
								v-model="recordActivities">
						</el-input>
					</el-col>

				</el-col>
				<el-col :span="24"  v-if="radio=='开屏'">
					<el-col :span="24" style="text-align: center">
						<strong>标识代码</strong>
					</el-col>
					<el-col :span="24">
						<el-input
								type="textarea"
								:rows="5"
								placeholder="请输入内容"
								v-model="identificationCode">
						</el-input>
					</el-col>

				</el-col>
			</el-col>
		</el-col>
		<el-col :span="24">
			<el-col :span="24"><strong>应用版本</strong> <el-button type="text" @click='versionSelect'>全选</el-button></el-col>
			<el-col :span="24">
				<el-col :span="2" style="min-width: 120px">
					<el-checkbox :indeterminate="isIndeterminateVersionan" v-model="checkAllVersionan" @change="handleCheckAllChangeVersionan">全选</el-checkbox>
					<strong>安卓</strong>
				</el-col>
				<el-col :span="13">
					<el-checkbox-group v-model="checkedCitiesVersionan" @change="handleCheckedCitiesChangeVersionan">
						<el-checkbox v-for="(city,index) in citiesVersionan" :label="city" :key="index">{{city}}</el-checkbox>
					</el-checkbox-group>
				</el-col>
			</el-col>
			<el-col :span="24" style="margin-top: 20px;">
				<el-col :span="2" style="min-width: 120px">
					<el-checkbox :indeterminate="isIndeterminateVersionios" v-model="checkAllVersionios" @change="handleCheckAllChangeVersionios">全选</el-checkbox>
					<strong>iOS</strong>
				</el-col>
				<el-col :span="13">
					<el-checkbox-group v-model="checkedCitiesVersionios" @change="handleCheckedCitiesChangeVersionios">
						<el-checkbox v-for="city in citiesVersionios" :label="city" :key="city">{{city}}</el-checkbox>
					</el-checkbox-group>
				</el-col>
			</el-col>
		</el-col>
		<el-col :span="24">
			<el-col :span="24"><strong>应用市场</strong> <el-button type="text" @click='marketSelect'>全选</el-button></el-col>
			<el-col :span="24">
				<el-col :span="2" style="min-width: 120px">
					<el-checkbox :indeterminate="isIndeterminateMarketan" v-model="checkAllMarketan" @change="handleCheckAllChangeMarketan">全选</el-checkbox>
					<strong>安卓</strong>
				</el-col>
				<el-col :span="13">
					<el-checkbox-group v-model="checkedCitiesMarketan" @change="handleCheckedCitiesChangeMarketan">
						<el-checkbox v-for="city in citiesMarketan" :label="city" :key="city">{{city}}</el-checkbox>
					</el-checkbox-group>
				</el-col>
			</el-col>
			<el-col :span="24" style="margin-top: 20px;">
				<el-col :span="2" style="min-width: 120px">
					<el-checkbox :indeterminate="isIndeterminateMarketios" v-model="checkAllMarketios" @change="handleCheckAllChangeMarketios">全选</el-checkbox>
					<strong>iOS</strong>
				</el-col>
				<el-col :span="13">
					<el-checkbox-group v-model="checkedCitiesMarketios" @change="handleCheckedCitiesChangeMarketios">
						<el-checkbox v-for="city in citiesMarketios" :label="city" :key="city">{{city}}</el-checkbox>
					</el-checkbox-group>
				</el-col>
			</el-col>
		</el-col>
		<el-col :span="24" style="margin-top: 30px;">
			<strong>排期时间</strong>
		</el-col>
		<el-col :span="24" style="margin-top:30px;">
			<strong>投放日期</strong>
			<el-col :span="24" style="margin-top:10px;">
				<el-col :span="8" style="padding-left: 30px">
					<el-col :span="24">
						<el-radio v-model="deliveryDay" label="1">长期投放</el-radio>
					</el-col>
					<el-col :span="24">
						开始时间
						<el-date-picker
								v-model="starttime"
								align="right"
								type="date"
								:disabled="deliveryDay == 1 ? false : true"
								placeholder="选择日期"
								format="yyyy/MM/dd"
								value-format="yyyy/MM/dd"
								:picker-options="pickerOptions1">
						</el-date-picker>
					</el-col>
				</el-col>
				<el-col :span="16" style="padding-left: 30px">
					<el-col :span="24">
						<el-radio v-model="deliveryDay" label="2">某日日期内投放</el-radio>
					</el-col>
					<el-col :span="24">
						时间段
						<el-date-picker
								v-model="sectiontime"
								type="daterange"
								align="right"
								unlink-panels
								:disabled="deliveryDay == 2 ? false : true"
								range-separator="--"
								start-placeholder="开始日期"
								end-placeholder="结束日期"
								format="yyyy/MM/dd"
								value-format="yyyy/MM/dd"
								:picker-options="pickerOptions2">
						</el-date-picker>
					</el-col>
				</el-col>

			</el-col>
		</el-col>
		<el-col :span="24" style="margin-top:30px;">
			<strong>投放时间</strong>
			<el-col :span="24" style="margin-top:10px;">
				<el-col :span="8" style="padding-left: 30px">
					<el-col :span="24">
						<el-radio v-model="deliveryTime" label="1">全天</el-radio>
					</el-col>
				</el-col>
				<el-col :span="16" style="padding-left: 30px">
					<el-col :span="24">
						<el-radio v-model="deliveryTime" label="2">特定时间段</el-radio>
					</el-col>
					<el-col :span="24">
						时间段
						<el-time-select
								placeholder="起始时间"
								:disabled="deliveryTime == 2 ? false : true"
								v-model="startime"
								:picker-options="{
								  start: '00:00',
								  step: '00:15',
								  end: '23:59'
								}">
						</el-time-select>
						<el-time-select
								placeholder="结束时间"
								:disabled="deliveryTime == 2 ? false : true"
								v-model="endTime"
								:picker-options="{
								  start: '00:00',
								  step: '00:15',
								  end: '23:59',
								  minTime: startime
								}">
						</el-time-select>
					</el-col>
				</el-col>

			</el-col>
		</el-col>
		<el-col :span="24" style="margin-top: 30px;margin-bottom: 50px;text-align: center">
			<el-button>取消</el-button>
			<el-button type="primary">提交</el-button>
		</el-col>
	</el-row>
</template>
<script>
	// import { getUserList } from '../../api/api';
	import moment from 'moment';
    const optionsversionan = ['上海', '北京', '广州', '深圳2', '深圳3', '深圳4', '深圳5'];
    const optionsversionios = ['上海1', '北京1', '广州1', '广州2', '广州3', '广州4', '广州5', '广州6', '广州7', '广州8', '广州9', '广州11', '广州12', '广州13', '广州14', '广州15', '广州16', '深圳'];
    const optionsmarketan = ['上海', '北京', '广1州', '广2州', '广3州'];
    const optionsmarketios = ['上海', '北京', '广州', '深圳'];
	export default {
		data() {
			return {
			    /*应用版本安卓*/
                checkAllVersionan: false,
                checkedCitiesVersionan: ['上海', '北京'],
                citiesVersionan: optionsversionan,
                isIndeterminateVersionan: true,
                /*应用版本安卓----end*/
                /*应用版本ios*/
                checkAllVersionios: false,
                checkedCitiesVersionios: ['上海1', '北京1'],
                citiesVersionios: optionsversionios,
                isIndeterminateVersionios: true,
                /*应用版本ios----end*/
                /*应用市场安卓*/
                checkAllMarketan: false,
                checkedCitiesMarketan: [],
                citiesMarketan: optionsmarketan,
                isIndeterminateMarketan: true,
                /*应用市场安卓----end*/
                /*应用市场ios*/
                checkAllMarketios: false,
                checkedCitiesMarketios: [],
                citiesMarketios: optionsmarketios,
                isIndeterminateMarketios: true,
                /*应用市场ios----end*/
				//标识代码
                identificationCode:'',
			    //活动文案
                recordActivities:'',
				//活动版位单选
                radio:'开屏',
				//时间段的起始时间
                startime: '',
				//时间段的结束时间
                endTime: '',
				//上传完图片的预览图片
                imageUrl:'',
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
				//选择全天还是特定时间
                deliveryTime:'1',
                sectiontime: '',
                starttime:moment().format('YYYY/MM/DD'),
                deliveryDay:'1',
                checkList:[],
                activityname:'',
                targetdetail:'',

			}
		},
        computed: {
		    //是否选中的信息流
            isinformation: function () {
                if(this.radio.indexOf("信息流") >= 0 ){
                    return true
				}else{
                    return false
				}
            },
			//随机的活动ID
            activityid: function () {
                let Num="";
                for(let i=0;i<4;i++)
                {
                    Num+=Math.floor(Math.random()*10);
                }
                return moment().format('MMDD')+Num
            },
    		judge: function() {
				if(this.checkList.length==0){
					return false
				}else{
					this.radio='';
					return true;

				}
            },
        },
		methods: {
		    /*应用版本安卓*/
            handleCheckAllChangeVersionan(val) {
                this.checkedCitiesVersionan = val ? optionsversionan : [];
                this.isIndeterminateVersionan = false;
            },

            handleCheckedCitiesChangeVersionan(value) {
                let checkedCount = value.length;
                this.checkAllVersionan = checkedCount === this.citiesVersionan.length;
                this.isIndeterminateVersionan = checkedCount > 0 && checkedCount < this.citiesVersionan.length;
            },
            /*应用版本安卓--end*/
            /*应用版本ios*/
            handleCheckAllChangeVersionios(val) {
                this.checkedCitiesVersionios = val ? optionsversionios : [];
                this.isIndeterminateVersionios = false;
            },

            handleCheckedCitiesChangeVersionios(value) {
                let checkedCount = value.length;
                this.checkAllVersionios = checkedCount === this.citiesVersionios.length;
                this.isIndeterminateVersionios = checkedCount > 0 && checkedCount < this.citiesVersionios.length;
            },
            versionSelect(){
                this.checkAllVersionios=true;
                this.checkAllVersionan=true;
                this.isIndeterminateVersionios=false;
                this.isIndeterminateVersionan=false;
				this.checkedCitiesVersionan=optionsversionan;
				this.checkedCitiesVersionios=optionsversionios;
			},
            /*应用版本ios--end*/
            /*应用市场安卓*/
            handleCheckAllChangeMarketan(val) {
                this.checkedCitiesMarketan = val ? optionsmarketan : [];
                this.isIndeterminateMarketan = false;
            },

            handleCheckedCitiesChangeMarketan(value) {
                let checkedCount = value.length;
                this.checkAllMarketan = checkedCount === this.citiesMarketan.length;
                this.isIndeterminateMarketan = checkedCount > 0 && checkedCount < this.citiesMarketan.length;
            },
            /*应用市场安卓--end*/
            /*应用市场ios*/
            handleCheckAllChangeMarketios(val) {
                this.checkedCitiesMarketios = val ? optionsmarketios : [];
                this.isIndeterminateMarketios = false;
            },

            handleCheckedCitiesChangeMarketios(value) {
                let checkedCount = value.length;
                this.checkAllMarketios = checkedCount === this.citiesMarketios.length;
                this.isIndeterminateMarketios = checkedCount > 0 && checkedCount < this.citiesMarketios.length;
            },
            marketSelect(){
                this.checkAllMarketios=true;
                this.checkAllMarketan=true;
                this.isIndeterminateMarketios=false;
                this.isIndeterminateMarketan=false;
                this.checkedCitiesMarketan=optionsmarketan;
                this.checkedCitiesMarketios=optionsmarketios;
            },
            /*应用市场ios--end*/

		    //删除上传
            clearUpload() {
                this.$refs.upload.clearFiles();
                this.imageUrl=''

            },
          //上传成功之后
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
			//上传之前
            beforeAvatarUpload(file) {
                /* const isJPG = file.type === 'image/jpeg';
                 const isLt2M = file.size / 1024 / 1024 < 2;

                 if (!isJPG) {
                     this.$message.error('上传头像图片只能是 JPG 格式!');
                 }
                 if (!isLt2M) {
                     this.$message.error('上传头像图片大小不能超过 2MB!');
                 }
                 return isJPG && isLt2M;*/
            },

            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
		},
		mounted() {

		},
		created(){
            this.marketSelect()
		}
	};

</script>

<style lang="scss">
	.createactivity{
		.fence{
			margin-top: 15px;
		}
		.avatar-uploader{
			height: 350px;
			background: #eeeeee;
		}
		.avatar-uploader .el-upload {
			border: none;
			border-radius: 6px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
		}
		.avatar-uploader .el-upload:hover {
			border-color: #409EFF;
		}
		.avatar-uploader-icon {
			font-size: 100px;
			color: #8c939d;
			width: auto;
			height: auto;
			line-height:inherit;
			text-align: center;
		}
		.avatar {
			width: 178px;
			height: 178px;
			display: block;
		}
		.el-input{
			/*width: 200px;*/
		}
		.el-input__inner{
			border-radius: 0;
			border: none;
			border-bottom: 1px solid #000;
		}
		.el-checkbox+.el-checkbox{
			margin-left: 0;
			/*margin-right: 10px;*/
		}
		.el-checkbox{
			margin-right: 10px;
			margin-top: 10px;
		}
	}
</style>