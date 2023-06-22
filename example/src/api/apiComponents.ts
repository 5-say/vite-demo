// Code generated by goctl. DO NOT EDIT.

export interface DemoError_Request {
  system_status_code: number
  http_status_code: number
  message: string
}

export interface DemoError_Response {
}

export interface GetList_Request {
}
export interface GetList_RequestParams {
  page: number // 当前页码
  per_page: number // 每页条目
  order_column: string // 排序字段
  order_type: string // 排序类型，asc、desc
}

export interface SendSMS_Request {
  country_code: string // 国际区号
  mobile: string // 手机号码
  captcha_code: string // 图形验证码
}

export interface SendSMS_Response {
  exp_timestamp: string // 短信验证码有效期时间戳
  remaining_retries: string // 输入错误剩余重试次数
}

export interface Admin_Public_GetSignInCaptcha_Request {
}

export interface Admin_Public_GetSignInCaptcha_Response {
}

export interface Admin_Public_CheckSignInCaptcha_Request {
}

export interface Admin_Public_CheckSignInCaptcha_Response {
}

export interface Admin_Public_SignInAccount_Request {
  account: string // 账号
  password: string // 密码（前端加密后提交）
  captcha_code: string // 图形验证码
}

export interface Admin_Public_SignInAccount_Response {
  token: string
}

export interface Admin_Public_SignInMobile_Request {
  country_code: string // 国际区号
  mobile: string // 手机号码
  sms_code: string // 短信验证码
}

export interface Admin_Public_SignInMobile_Response {
  token: string
}

export interface Admin_Public_SendSignInSMS_Request {
  country_code: string // 国际区号
  mobile: string // 手机号码
  captcha_code: string // 图形验证码
}

export interface Admin_Public_SendSignInSMS_Response {
  exp_timestamp: string // 短信验证码有效期时间戳
  remaining_retries: string // 输入错误剩余重试次数
}

export interface User_Public_GetSignUpCaptcha_Request {
}

export interface User_Public_GetSignUpCaptcha_Response {
}

export interface User_Public_CheckSignUpCaptcha_Request {
}

export interface User_Public_CheckSignUpCaptcha_Response {
}

export interface User_Public_SignUpAccount_Request {
  account: string // 账号
  password: string // 密码（前端加密后提交）
  captcha_code: string // 图形验证码
}

export interface User_Public_SignUpAccount_Response {
  token: string
}

export interface User_Public_SignUpMobile_Request {
  country_code: string // 国际区号
  mobile: string // 手机号码
  sms_code: string // 短信验证码
}

export interface User_Public_SignUpMobile_Response {
  token: string
}

export interface User_Public_SendSignUpSMS_Request {
  country_code: string // 国际区号
  mobile: string // 手机号码
  captcha_code: string // 图形验证码
}

export interface User_Public_SendSignUpSMS_Response {
  exp_timestamp: string // 短信验证码有效期时间戳
  remaining_retries: string // 输入错误剩余重试次数
}

export interface User_Public_GetSignInCaptcha_Request {
}

export interface User_Public_GetSignInCaptcha_Response {
}

export interface User_Public_CheckSignInCaptcha_Request {
}

export interface User_Public_CheckSignInCaptcha_Response {
}

export interface User_Public_SignInAccount_Request {
  account: string // 账号
  password: string // 密码（前端加密后提交）
  captcha_code: string // 图形验证码
}

export interface User_Public_SignInAccount_Response {
  token: string
}

export interface User_Public_SignInMobile_Request {
  country_code: string // 国际区号
  mobile: string // 手机号码
  sms_code: string // 短信验证码
}

export interface User_Public_SignInMobile_Response {
  token: string
}

export interface User_Public_SendSignInSMS_Request {
  country_code: string // 国际区号
  mobile: string // 手机号码
  captcha_code: string // 图形验证码
}

export interface User_Public_SendSignInSMS_Response {
  exp_timestamp: string // 短信验证码有效期时间戳
  remaining_retries: string // 输入错误剩余重试次数
}

export interface User_Self_SignOut_Request {
}

export interface User_Self_SignOut_Response {
}

export interface User_Self_EditPassword_Request {
  original_password: string // 原始密码（前端加密后提交）
  new_password: string // 新的密码（前端加密后提交）
}

export interface User_Self_EditPassword_Response {
}

export interface User_Self_FoodList_Request {
}
export interface User_Self_FoodList_RequestParams {
  page: number // 当前页码
  per_page: number // 每页条目
  order_column: string // 排序字段
  order_type: string // 排序类型，asc、desc
  search_cook_book_id_eq: number // 食谱 ID
  search_status_eq: string // 状态 fully.库存充足 needBuy.需要采购
}
export interface User_Self_FoodList_RequestHeaders {
}

export interface User_Self_FoodList_Response {
  total: number
  items: Array<User_Self_FoodList_Response_Item>
}

export interface User_Self_FoodList_Response_Item {
  id: number // 食材 ID
  name: string // 名称
  inventory: number // 库存量
  status: string // 状态 fully.库存充足 needBuy.需要采购
}

export interface User_Self_FoodItem_Request {
}
export interface User_Self_FoodItem_RequestParams {
}

export interface User_Self_FoodItem_Response {
  id: number // 食材 ID
  name: string // 名称
  inventory: number // 库存量
  status: string // 状态 fully.库存充足 needBuy.需要采购
}

export interface User_Self_FoodCreate_Request {
  name: string // 名称
  inventory: number // 库存量
  status: string // 状态 fully.库存充足 needBuy.需要采购
}

export interface User_Self_FoodCreate_Response {
}
export interface User_Self_FoodCreate_ResponseParams {
}

export interface User_Self_FoodEdit_Request {
  name: string // 名称
  inventory: number // 库存量
  status: string // 状态 fully.库存充足 needBuy.需要采购
}
export interface User_Self_FoodEdit_RequestParams {
}

export interface User_Self_FoodEdit_Response {
}

export interface User_Self_FoodDelete_Request {
}
export interface User_Self_FoodDelete_RequestParams {
  ids: Array<number> // 食材 ID
  password: string // 账户密码
}

export interface User_Self_FoodDelete_Response {
}

export interface User_Self_FoodIncrease_Request {
  num: number // 补充数量
}
export interface User_Self_FoodIncrease_RequestParams {
}

export interface User_Self_FoodIncrease_Response {
}

export interface User_Self_FoodDecrease_Request {
  num: number // 消耗数量
}
export interface User_Self_FoodDecrease_RequestParams {
}

export interface User_Self_FoodDecrease_Response {
}

