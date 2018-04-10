<template>
	<el-row class="createshare">
		<el-col :span="24">
			<el-col :span="24">
				<strong>分享名称</strong>
			</el-col>
			<el-col :span="24">
				<el-input v-model="sharename"></el-input>
			</el-col>
		</el-col>
		<el-col :span="24">
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
		<!--文案-->
		<el-col :span="24">
			<el-col :span="24" style="margin-top: 20px;">
				<strong>文案</strong>
			</el-col>
			<el-col :span="24">
				<el-col :span="12" style="padding: 15px">
					<el-col :span="24">
						<strong>文案名称</strong>
					</el-col>
					<el-col :span="24">
						<el-input v-model="sharename"></el-input>
					</el-col>
					<el-col :span="24" style="margin-top: 10px;">
						<el-input v-model="sharename" type="textarea"></el-input>
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
			</el-col>
		</el-col>
	</el-row>
</template>
<script>
	// import { getUserList } from '../../api/api';
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
                checkAll: false,
                checkAll1: false,
                checkAll2: false,
                list:['1','2'],
                checkedCities: ['朋友圈'],
                checkedCities1: ['朋友圈'],
                cities: cityOptions,
                isIndeterminate: true,
                isIndeterminate1: true,
                isIndeterminate2: true
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

		},
		mounted() {
            this.marketSelect()
		}
	};

</script>

<style lang="scss">
	.createshare{
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


	}

</style>