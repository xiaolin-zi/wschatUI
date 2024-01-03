import request from '@/utils/request'
export default {
    //ai对话
    aiChat(messgeInfo) {
        return request({
            url: `/ai/chat`,
            method: 'post',
            data: messgeInfo
        })
    },
}
