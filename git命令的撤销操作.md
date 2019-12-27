[TOC]
手滑在一个总目录下面输入了`git init `和`Git add .`
## 撤销`git add .`
撤销方法:
```
##命令
$git rm -r --cached .
error: the following files have staged content different from both the
file and the HEAD:
    cms10_11_136_137_editsecretok
    cms1_usermodel
    cms2_loginview
    cms3_loginok
    cms4_login_linit
    cms5_tem
    cms6_logout
    cms78_info_csrf
    cms9_editsecret
    context_demo
    errorhandle等钩子函数
    falsk143_sendemail
    flask-restful标准化返回参数
    flask138
    flask139
    flask140_sweetalert_secret
    flask141_email_ui
    flask142_email_config
    flask144_modifyemail
    flask145_146_permission_role
    flask147_permission_judge
    flask148_Authorization_verification
    flask149_service_authorization_verification
    flask150_151_front_user
    flask152_front_regist
    flask153_154graph_verify
    flask155_157_message_verication_api
    flask158message_verication_encription
    flask159_161_regist_backend_logistic
    flask162_registis_ok
    flask163_signin_ui
    flask164_sign_backend_ok
    flask165_firstpage_navbar
    flask166_firstpage_carousel
    flask167_carousel_manage
    flask168_carousel_modal_dialog
    flask169_backend_carousel
    flask170_carousel_front_logistic
    flask171_editcarousel
    flask172-173qiniuyun_python_sdk
    flask174_Carousel_uploading_picture
    flask175_Home_Dynamically_Obtain_Carousel_Data
    flask_csrf
    hook_function
    restful_class106
    restful_class107
    restful_demo1
    signal机制
    内置信号
(use -f to force removal)
## 加强版命令
$git rm -r -f --cached .
rm '.DS_Store'
rm 'README.md'
rm 'cms10_11_136_137_editsecretok'
rm 'cms1_usermodel'
rm 'cms2_loginview'
rm 'cms3_loginok'
rm 'cms4_login_linit'
rm 'cms5_tem'
rm 'cms6_logout'
rm 'cms78_info_csrf'
rm 'cms9_editsecret'
rm 'context_demo'
rm 'errorhandle等钩子函数'
rm 'falsk143_sendemail'
rm 'flask-restful标准化返回参数'
rm 'flask138'
rm 'flask139'
rm 'flask140_sweetalert_secret'
rm 'flask141_email_ui'
rm 'flask142_email_config'
rm 'flask144_modifyemail'
rm 'flask145_146_permission_role'
rm 'flask147_permission_judge'
rm 'flask148_Authorization_verification'
rm 'flask149_service_authorization_verification'
rm 'flask150_151_front_user'
rm 'flask152_front_regist'
rm 'flask153_154graph_verify'
rm 'flask155_157_message_verication_api'
rm 'flask158message_verication_encription'
rm 'flask159_161_regist_backend_logistic'
rm 'flask162_registis_ok'
rm 'flask163_signin_ui'
rm 'flask164_sign_backend_ok'
rm 'flask165_firstpage_navbar'
rm 'flask166_firstpage_carousel'
rm 'flask167_carousel_manage'
rm 'flask168_carousel_modal_dialog'
rm 'flask169_backend_carousel'
rm 'flask170_carousel_front_logistic'
rm 'flask171_editcarousel'
rm 'flask172-173qiniuyun_python_sdk'
rm 'flask174_Carousel_uploading_picture'
rm 'flask175_Home_Dynamically_Obtain_Carousel_Data'
rm 'flask176_board_manage1/.DS_Store'
rm 'flask176_board_manage1/176(有代码流程).md'
rm 'flask176_board_manage1/176(有代码流程)_files/66473702.png'
rm 'flask176_board_manage1/176(有代码流程)_files/66786220.png'
rm 'flask176_board_manage1/176(有代码流程)_files/67001357.png'
rm 'flask176_board_manage1/176(有代码流程)_files/67457887.png'
rm 'flask176_board_manage1/176(有代码流程)_files/68659091.png'
rm 'flask176_board_manage1/176(有代码流程)_files/68726291.png'
rm 'flask176_board_manage1/176(有代码流程)_files/68905272.png'
rm 'flask176_board_manage1/176(有代码流程)_files/69330014.png'
rm 'flask176_board_manage1/176(有代码流程)_files/69405340.png'
rm 'flask176_board_manage1/176(有代码流程)_files/69595523.png'
rm 'flask176_board_manage1/176(有代码流程)_files/69719446.png'
rm 'flask176_board_manage1/176(有代码流程)_files/70177644.png'
rm 'flask176_board_manage1/176(有代码流程)_files/70324671.png'
rm 'flask176_board_manage1/176(有代码流程)_files/cc5a5cc8-d95d-4b50-9874-647141746b34.png'
rm 'flask176_board_manage1/PEP8_notes.txt'
rm 'flask176_board_manage1/__pycache__/app.cpython-37.pyc'
rm 'flask176_board_manage1/__pycache__/config.cpython-37.pyc'
rm 'flask176_board_manage1/__pycache__/exts.cpython-37.pyc'
rm 'flask176_board_manage1/app.py'
rm 'flask176_board_manage1/apps/__pycache__/forms.cpython-37.pyc'
rm 'flask176_board_manage1/apps/__pycache__/models.cpython-37.pyc'
rm 'flask176_board_manage1/apps/cms/__init__.py'
rm 'flask176_board_manage1/apps/cms/__pycache__/__init__.cpython-37.pyc'
rm 'flask176_board_manage1/apps/cms/__pycache__/decorators.cpython-37.pyc'
rm 'flask176_board_manage1/apps/cms/__pycache__/forms.cpython-37.pyc'
rm 'flask176_board_manage1/apps/cms/__pycache__/hooks.cpython-37.pyc'
rm 'flask176_board_manage1/apps/cms/__pycache__/models.cpython-37.pyc'
rm 'flask176_board_manage1/apps/cms/__pycache__/views.cpython-37.pyc'
rm 'flask176_board_manage1/apps/cms/decorators.py'
rm 'flask176_board_manage1/apps/cms/forms.py'
rm 'flask176_board_manage1/apps/cms/hooks.py'
rm 'flask176_board_manage1/apps/cms/models.py'
rm 'flask176_board_manage1/apps/cms/views.py'
rm 'flask176_board_manage1/apps/common/__init__.py'
rm 'flask176_board_manage1/apps/common/__pycache__/__init__.cpython-37.pyc'
rm 'flask176_board_manage1/apps/common/__pycache__/views.cpython-37.pyc'
rm 'flask176_board_manage1/apps/common/models.py'
rm 'flask176_board_manage1/apps/common/views.py'
rm 'flask176_board_manage1/apps/forms.py'
rm 'flask176_board_manage1/apps/front/__init__.py'
rm 'flask176_board_manage1/apps/front/__pycache__/__init__.cpython-37.pyc'
rm 'flask176_board_manage1/apps/front/__pycache__/forms.cpython-37.pyc'
rm 'flask176_board_manage1/apps/front/__pycache__/models.cpython-37.pyc'
rm 'flask176_board_manage1/apps/front/__pycache__/views.cpython-37.pyc'
rm 'flask176_board_manage1/apps/front/forms.py'
rm 'flask176_board_manage1/apps/front/models.py'
rm 'flask176_board_manage1/apps/front/views.py'
rm 'flask176_board_manage1/apps/models.py'
rm 'flask176_board_manage1/config.py'
rm 'flask176_board_manage1/exts.py'
rm 'flask176_board_manage1/manage.py'
rm 'flask176_board_manage1/migrations/README'
rm 'flask176_board_manage1/migrations/__pycache__/env.cpython-37.pyc'
rm 'flask176_board_manage1/migrations/alembic.ini'
rm 'flask176_board_manage1/migrations/env.py'
rm 'flask176_board_manage1/migrations/script.py.mako'
rm 'flask176_board_manage1/migrations/versions/08504da615b9_.py'
rm 'flask176_board_manage1/migrations/versions/5deacd3d34d0_.py'
rm 'flask176_board_manage1/migrations/versions/6f5a8c020ab4_.py'
rm 'flask176_board_manage1/migrations/versions/725375213f6e_.py'
rm 'flask176_board_manage1/migrations/versions/__pycache__/08504da615b9_.cpython-37.pyc'
rm 'flask176_board_manage1/migrations/versions/__pycache__/5deacd3d34d0_.cpython-37.pyc'
rm 'flask176_board_manage1/migrations/versions/__pycache__/6f5a8c020ab4_.cpython-37.pyc'
rm 'flask176_board_manage1/migrations/versions/__pycache__/725375213f6e_.cpython-37.pyc'
rm 'flask176_board_manage1/migrations/versions/__pycache__/bcd1ceec0210_.cpython-37.pyc'
rm 'flask176_board_manage1/migrations/versions/__pycache__/d002dfa15693_.cpython-37.pyc'
rm 'flask176_board_manage1/migrations/versions/__pycache__/f9d6a44c9f5d_.cpython-37.pyc'
rm 'flask176_board_manage1/migrations/versions/bcd1ceec0210_.py'
rm 'flask176_board_manage1/migrations/versions/d002dfa15693_.py'
rm 'flask176_board_manage1/migrations/versions/f9d6a44c9f5d_.py'
rm 'flask176_board_manage1/some points.txt'
rm 'flask176_board_manage1/static/.DS_Store'
rm 'flask176_board_manage1/static/cms/css/base.css'
rm 'flask176_board_manage1/static/cms/css/signin.css'
rm 'flask176_board_manage1/static/cms/js/banners.js'
rm 'flask176_board_manage1/static/cms/js/base.js'
rm 'flask176_board_manage1/static/cms/js/boards.js'
rm 'flask176_board_manage1/static/cms/js/resetemail.js'
rm 'flask176_board_manage1/static/cms/js/resetpwd.js'
rm 'flask176_board_manage1/static/common/.DS_Store'
rm 'flask176_board_manage1/static/common/images/h.png'
rm 'flask176_board_manage1/static/common/images/h1.jpeg'
rm 'flask176_board_manage1/static/common/sweetalert/.DS_Store'
rm 'flask176_board_manage1/static/common/sweetalert/images/h1.jpeg'
rm 'flask176_board_manage1/static/common/sweetalert/sweetalert.css'
rm 'flask176_board_manage1/static/common/sweetalert/sweetalert.min.js'
rm 'flask176_board_manage1/static/common/sweetalert/zlalert.js'
rm 'flask176_board_manage1/static/common/zlajax.js'
rm 'flask176_board_manage1/static/common/zlparam.js'
rm 'flask176_board_manage1/static/common/zlqiniu.js'
rm 'flask176_board_manage1/static/front/css/front_base.css'
rm 'flask176_board_manage1/static/front/css/front_index.css'
rm 'flask176_board_manage1/static/front/css/front_signbase.css'
rm 'flask176_board_manage1/static/front/css/front_signup.css'
rm 'flask176_board_manage1/static/front/js/front_signin.js'
rm 'flask176_board_manage1/static/front/js/front_signup.js'
rm 'flask176_board_manage1/templates/cms/cms_banners.html'
rm 'flask176_board_manage1/templates/cms/cms_base.html'
rm 'flask176_board_manage1/templates/cms/cms_boards.html'
rm 'flask176_board_manage1/templates/cms/cms_comments.html'
rm 'flask176_board_manage1/templates/cms/cms_croles.html'
rm 'flask176_board_manage1/templates/cms/cms_cusers.html'
rm 'flask176_board_manage1/templates/cms/cms_fusers.html'
rm 'flask176_board_manage1/templates/cms/cms_index.html'
rm 'flask176_board_manage1/templates/cms/cms_index_backup.html'
rm 'flask176_board_manage1/templates/cms/cms_login.html'
rm 'flask176_board_manage1/templates/cms/cms_posts.html'
rm 'flask176_board_manage1/templates/cms/cms_profile.html'
rm 'flask176_board_manage1/templates/cms/cms_resetemail.html'
rm 'flask176_board_manage1/templates/cms/cms_resetpwd.html'
rm 'flask176_board_manage1/templates/common/_heads.html'
rm 'flask176_board_manage1/templates/common/_macros.html'
rm 'flask176_board_manage1/templates/front/front_base.html'
rm 'flask176_board_manage1/templates/front/front_index.html'
rm 'flask176_board_manage1/templates/front/front_index_backup.html'
rm 'flask176_board_manage1/templates/front/front_signbase.html'
rm 'flask176_board_manage1/templates/front/front_signin.html'
rm 'flask176_board_manage1/templates/front/front_signup.html'
rm 'flask176_board_manage1/templates/front/front_test.html'
rm 'flask176_board_manage1/utils/.DS_Store'
rm 'flask176_board_manage1/utils/CCPSDK/.DS_Store'
rm 'flask176_board_manage1/utils/CCPSDK/CCPRestSDK.py'
rm 'flask176_board_manage1/utils/CCPSDK/__init__.py'
rm 'flask176_board_manage1/utils/CCPSDK/__pycache__/CCPRestSDK.cpython-37.pyc'
rm 'flask176_board_manage1/utils/CCPSDK/__pycache__/__init__.cpython-37.pyc'
rm 'flask176_board_manage1/utils/CCPSDK/__pycache__/xmltojson.cpython-37.pyc'
rm 'flask176_board_manage1/utils/CCPSDK/xmltojson.py'
rm 'flask176_board_manage1/utils/CCPSDK/接口说明.txt'
rm 'flask176_board_manage1/utils/__pycache__/restful.cpython-37.pyc'
rm 'flask176_board_manage1/utils/__pycache__/safeutils.cpython-37.pyc'
rm 'flask176_board_manage1/utils/__pycache__/zlcache.cpython-37.pyc'
rm 'flask176_board_manage1/utils/captcha/Cookie-Regular.ttf'
rm 'flask176_board_manage1/utils/captcha/Courgette-Regular.ttf'
rm 'flask176_board_manage1/utils/captcha/LHANDW.TTF'
rm 'flask176_board_manage1/utils/captcha/Lobster-Regular.ttf'
rm 'flask176_board_manage1/utils/captcha/__init__.py'
rm 'flask176_board_manage1/utils/captcha/__init__.pyc'
rm 'flask176_board_manage1/utils/captcha/__pycache__/__init__.cpython-36.pyc'
rm 'flask176_board_manage1/utils/captcha/__pycache__/__init__.cpython-37.pyc'
rm 'flask176_board_manage1/utils/captcha/euphorig.ttf'
rm 'flask176_board_manage1/utils/captcha/verdana.ttf'
rm 'flask176_board_manage1/utils/restful.py'
rm 'flask176_board_manage1/utils/safeutils.py'
rm 'flask176_board_manage1/utils/zlcache.py'
rm 'flask_csrf'
rm 'hook_function'
rm 'restful_class106'
rm 'restful_class107'
rm 'restful_demo1'
rm 'signal机制'
rm '内置信号'
```
## 撤销`Git init`
```
$rm -rf .git
```