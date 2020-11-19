//实际上引入过来的就是axios
import http from './http'
import {
    nowplayingListUri,
    comingSoonListURi
} from '@/config/url'
import { nowPlayingListUri } from '../config/url'

// 暴露出
export const nowplayingListData =( page =1) =>{
    return http.get(nowPlayingListUri +page)
}