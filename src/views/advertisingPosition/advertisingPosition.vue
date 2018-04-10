<template>
    <el-row class="advertisingPosition">
        <el-col :span="24">
            <strong>广告位管理</strong>
        </el-col>
        <el-col :span="24">
            <el-col :span="3">
                <el-col :span="24" class="adverHeader">
                    平台
                </el-col>
                <el-col :span="24" class="adverBody">
                    iOS
                </el-col>
                <el-col :span="24" class="adverBody">
                    Android
                </el-col>
            </el-col>
            <el-col :span="4" style="padding-right: 10px">
                <el-col :span="24" class="adverHeader">
                    <div>目标版本</div>
                    <div style="color: #cdcdcd">输入需要控制的版本号</div>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-input v-model="iosEdition"></el-input>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-input v-model="anEdition"></el-input>
                </el-col>
            </el-col>
            <el-col :span="5" style="padding-right: 10px">
                <el-col :span="24" class="adverHeader">
                    <div>渠道</div>
                    <div style="color: #cdcdcd">选择控制状态</div>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-select v-model="channelios" multiple collapse-tags>
                        <el-option
                                v-for="item in options"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-select v-model="channelan" multiple collapse-tags>
                        <el-option
                                v-for="item in options"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-col>
            </el-col>
            <el-col :span="4" style="padding-right: 10px">
                <el-col :span="24" class="adverHeader">
                    <div>其他广告开关</div>
                    <div style="color: #cdcdcd">选择控制状态</div>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-select v-model="otherios">
                        <el-option
                                v-for="item in other"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-select v-model="otheran">
                        <el-option
                                v-for="item in other"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-col>
            <el-col :span="4">
                <el-col :span="24" class="adverHeader">
                    <div>开屏广告控制</div>
                    <div style="color: #cdcdcd">选择控制状态</div>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-select v-model="controlios">
                        <el-option
                                v-for="item in control"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-select v-model="controlan">
                        <el-option
                                v-for="item in control"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-col>
            <el-col :span="2" style="text-align: center">
                <el-col :span="24" class="adverHeader">
                    <div>开关</div>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-switch
                            v-model="iospull"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-switch
                            v-model="anpull"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </el-col>
            </el-col>
            <el-col :span="2" style="text-align: center">
                <el-col :span="24" class="adverHeader">
                    <div>操作</div>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-button type="text" @click="updateadver('ios')">更新数据</el-button>
                </el-col>
                <el-col :span="24" class="adverBody">
                    <el-button type="text" @click="updateadver('an')">更新数据</el-button>
                </el-col>
            </el-col>
        </el-col>
        <el-col :span="24" style="margin-top: 20px;">
            <strong>增加渠道号</strong>
            <el-button type="text" @click="submitchannel">提交</el-button>
        </el-col>
        <el-col :span="24">
            <el-input
                    type="textarea"
                    :rows="5"
                    placeholder="请输入内容"
                    v-model="textarea">
            </el-input>
        </el-col>
    </el-row>
</template>
<script>
    import { channelList,incChannel,adControl } from '../../api/api';
    import qs from 'qs';
    export default {
        data() {
            return {
                otherios:'1',
                otheran:'1',
                controlios:'1',
                controlan:'1',
                textarea:'',
                iospull:true,
                anpull:true,
                iosEdition:'',
                anEdition:'',
                channelios: [],
                channelan: [],
                options: [],
                other: [{
                    value: '1',
                    label: '开启'
                }, {
                    value: '0',
                    label: '关闭'
                }],
                control: [{
                    value: '1',
                    label: '自营'
                }, {
                    value: '2',
                    label: '广点通（三方）'
                }],

            }
        },
        methods: {
            //更新数据
            updateadver(data2){
                if( data2 == 'ios' ){
                    let data1={
                        os:'iOS',
                        targetVersion:this.iosEdition.toString(),
                        // channels:'',
                        channels:this.channelios.join(","),
                        // channels:qs.stringify(this.channelios),
                        otherAd:this.otherios,
                        startAd:this.controlios,
                        power:this.iospull ? 1 : 0,
                    };

                    adControl(data1).then(data => {
                        if(data.data.status==200){
                            this.$message({
                                message: '提交成功',
                                type: 'success'
                            });
                        }else{
                            this.$message.error(data.data.message);
                        }
                    });

                }else if(data2=='an'){
                    let data1={
                        os:'Android',
                        targetVersion:this.anEdition.toString(),
                        channels:this.channelan.join(","),
                        // channels:qs.parse(this.channelan),
                        otherAd:this.otheran,
                        startAd:this.controlan,
                        power:this.anpull ? 1 : 0,
                    };
                    adControl(data1).then(data => {
                        if(data.data.status==200){
                            this.$message({
                                message: '提交成功',
                                type: 'success'
                            });
                        }else{
                            this.$message.error(data.data.message);
                        }
                    });

                }
            },
            //渠道号提交
            submitchannel(){
                incChannel({data:this.textarea}).then(data => {
                    if(data.data.status==200){
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                    }else{
                        this.$message.error(data.data.message);
                    }

                });
            }

        },
        mounted() {
            channelList().then(data => {
                let realdata1=data.data.body;
                this.options=realdata1

            });
        }
    };

</script>

<style lang="scss">
    .advertisingPosition{
        .adverHeader{
            height: 40px;
        }
        .adverBody{
            height: 40px;
            line-height: 40px;
        }
        .el-input{
            /*min-width: 160px;*/
        }
        .el-input__inner{

            height: 33px !important;
            line-height: 33px;
        }
    }
</style>