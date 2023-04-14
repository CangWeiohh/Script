/**
 * @fileoverview Example to sign in Glados automatically and get the checkin reward.
 *
 * @supported Quantumult X (v1.0.5-build199)
 *
 * [task_local]
 * # Glados Checkin
 * 0 9 * * * glados-checkin.js
 */

const url = "https://glados.rocks/api/user/checkin";
const headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    "Authorization": "5547625865797486976414591193354-900-1440", // 填写你的Authorization值
    "Connection": "keep-alive",
    "Content-Length": "26",
    "Content-Type": "application/json;charset=utf-8",
    "Cookie": "koa:sess=eyJ1c2VySWQiOjk5NDM1LCJfZXhwaXJlIjoxNzA3MzE3NTk0NTIzLCJfbWF4QWdlIjoyNTkyMDAwMDAwMH0=; koa:sess.sig=A1rM7rt1GX2Slb_3Lg1PKOZOqRQ", // 填写你的 koa:sess 值
    "Host": "glados.rocks",
    "Origin": "https://glados.rocks",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15"
};

const body = {"token":"glados.network"};

const myRequest = {
    url: url,
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
};

$task.fetch(myRequest).then(response => {
    const result = JSON.parse(response.body);
    if (result.code === 0) {
        $notify("GLaDOS签到", "签到成功", `获得 ${result.list[0]} 天奖励`);
    } else {
        $notify("GLaDOS签到", "签到失败", `错误信息：${result.message}`);
    }
}, reason => {
    $notify("GLaDOS签到", "请求失败", reason.error);
}); 
