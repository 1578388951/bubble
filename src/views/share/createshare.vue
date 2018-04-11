<template>
	<el-row class="createshare">
		<el-col :span="24" id="nameAnchor">
			<el-col :span="24">
				<strong>分享名称</strong>
			</el-col>
			<el-col :span="24">
				<el-input v-model="sharename"></el-input>
			</el-col>
		</el-col>
		<el-col :span="24"  id="routeAnchor">
			<el-col :span="24">
				<strong>分享路径</strong>
				<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
			</el-col>
			<el-col :span="24">
				<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
					<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
				</el-checkbox-group>
			</el-col>
		</el-col>
		<el-col :span="24" id="marketAnchor">
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
		<!--文案-->
		<el-col :span="24" id="contentAnchor">
			<el-col :span="24" style="margin-top: 20px;">
				<strong>文案</strong>
			</el-col>
			<el-col :span="24">
				<el-col :span="12" style="padding: 15px">
					<el-col :span="24">
						<strong>文案名称</strong>
					</el-col>
					<el-col :span="24">
						<el-input v-model="contentname"></el-input>
					</el-col>
					<el-col :span="24" style="margin-top: 10px;">
						<el-input v-model="sharecontent" type="textarea" :rows="5"></el-input>
					</el-col>
				</el-col>
				<el-col :span="12"  style="padding: 15px">

					<el-col :span="24" class="rowscroll">
						<el-checkbox-group v-model="list">
							<el-col :span="24" class="sharerow">
								<el-checkbox label="1">文案名称：**********************************文案名称：文案名称：文案名称：文案名称：文案名称：文案名称：文案名称：文案名称：文案名称：</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="2">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="3">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
							<el-col :span="24">
								<el-checkbox label="4">文案名称：**********************************</el-checkbox>
							</el-col>
						</el-checkbox-group>
					</el-col>
				</el-col>
			</el-col>
		</el-col>
		<el-col :span="24">
			<strong>分享图片</strong>
			<el-col :span="24">
				<el-checkbox-group v-model="shareImg">
					<el-col :span="12">
						<el-col :span="24">
							<el-checkbox label="固定图片">固定图片</el-checkbox>
						</el-col>
					</el-col>
					<el-col :span="12">
						<el-col :span="24">
							<el-checkbox label="动态图片">动态图片</el-checkbox>
						</el-col>
					</el-col>
				</el-checkbox-group>
				<el-col :span="24">
					<el-col :span="12" style="padding: 10px">
						<el-col :span="24">图片名称</el-col>
						<el-col :span="24">
							<el-input v-model="fixedPicture" placeholder="请输入图片名称"></el-input>
						</el-col>
						<el-col :span="24" style="margin-top: 10px;">
							<el-upload
									class="avatar-uploader"
									action="https://jsonplaceholder.typicode.com/posts/"
									:show-file-list="false"
									ref="upload"
									:on-success="handleAvatarSuccess"
									:before-upload="beforeAvatarUpload">
								<template v-if="imageUrl" style="position: relative;">
										<img :src="imageUrl" class="avatar">
								</template>
								<template v-else style="position: relative;">
										<i class="el-icon-plus avatar-uploader-icon"></i>
								</template>
							</el-upload>
						</el-col>
					</el-col>
					<el-col :span="12" style="padding: 10px">
						<el-col :span="24">图片名称</el-col>
						<el-col :span="24">
							<el-input v-model="dynamicPicture" placeholder="请输入图片名称"></el-input>
						</el-col>
						<el-col :span="24" style="margin-top: 10px;">
							<el-upload
									class="avatar-uploader"
									action="https://jsonplaceholder.typicode.com/posts/"
									:show-file-list="false"
									ref="upload"
									:on-success="handleAvatarSuccess"
									:before-upload="beforeAvatarUpload">
								<template v-if="imageUrl" style="position: relative;">
									<img :src="imageUrl" class="avatar">
								</template>
								<template v-else style="position: relative;">
									<i class="el-icon-plus avatar-uploader-icon"></i>
								</template>
							</el-upload>
						</el-col>
					</el-col>
				</el-col>

			</el-col>
		</el-col>
		<el-col :span="24" id="versionAnchor">
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
		<el-col :span="24" style="margin-top: 30px;margin-bottom: 50px;text-align: center">
			<el-button>取消</el-button>
			<el-button type="primary" @click="sharesubmit">提交</el-button>
		</el-col>
	</el-row>
</template>
<script>
	// import { getUserList } from '../../api/api';
    import bus from '../../utils/eventBus';
    const cityOptions = ['朋友圈', '微信好友、QQ、短信'];
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
                shareImg:['固定图片'],
                sharename:'',
                sharecontent:'',
                checkAll: false,
                checkAll1: false,
                checkAll2: false,
                list:['1','2'],
                checkedCities: ['朋友圈'],
                checkedCities1: ['朋友圈'],
                cities: cityOptions,
                isIndeterminate: true,
                isIndeterminate1: true,
                isIndeterminate2: true,
                fixedPicture:'',
                dynamicPicture:'',
                imageUrl:'',
                contentname:'',
			}
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
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            handleCheckAllChange1(val) {
                this.checkedCities1 = val ? cityOptions : [];
                this.isIndeterminate1 = false;
            },
            handleCheckedCitiesChange1(value) {
                let checkedCount = value.length;
                this.checkAll1 = checkedCount === this.cities.length;
                this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.cities.length;
            },
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
			message(mess){
                this.$message({
                    message: mess,
                    type: 'warning'
                });
			},
            sharesubmit(){
                if(this.sharename.replace(/(^s*)|(s*$)/g, "").length ==0){
                    this.goAnchor('#nameAnchor')
                    this.message('分享名称不能为空')
				}else if(this.checkedCities.length==0){
                    this.goAnchor('#routeAnchor')
                    this.message('分享路径必选')
				}else if(this.checkedCitiesMarketan.length==0 || this.checkedCitiesMarketios.length==0){
                    this.goAnchor('#marketAnchor')
                    this.message('应用市场必选')
                }else if(this.contentname.replace(/(^s*)|(s*$)/g, "").length ==0 || this.sharecontent.replace(/(^s*)|(s*$)/g, "").length ==0 || this.list.length==0){
                    this.goAnchor('#contentAnchor')
                    this.message('文案必填')
                }else if(this.checkedCitiesVersionan.length ==0 || this.checkedCitiesVersionios.length==0){
                    this.goAnchor('#versionAnchor')
                    this.message('应用版本必选')
                }

			},
            goAnchor(selector) {
                let anchor = this.$el.querySelector(selector)
                bus.$emit('userDefinedEvent', anchor.offsetTop);
            }

		},
		mounted() {
            this.marketSelect()
		},
        beforeDestroy(){
            bus.$off('userDefinedEvent');
		}
	};

</script>

<style lang="scss">
	.createshare{
		.avatar-uploader{
			height: 350px;
			background: #eeeeee;
			overflow: hidden;
		}
		.avatar-uploader .el-upload {
			border: 1px solid #ccc;
			border-radius: 6px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
		}
		.avatar-uploader .el-upload:hover {
			border-color: #409EFF;
		}
		.avatar-uploader-icon {
			font-size: 20px;
			color: #8c939d;
			width: 178px;
			height: 178px;
			line-height:178px;
			text-align: center;
		}
		.avatar {
			width: 178px;
			height: 178px;
			display: block;
		}
		.sharerow{
			overflow : hidden; display: -webkit-box;
			white-space:nowrap; text-overflow:ellipsis;
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
		.rowscroll{
			height: 200px;overflow-y: auto
		}
		.el-textarea__inner{
			border: 1px solid #000;
		}


	}

</style>