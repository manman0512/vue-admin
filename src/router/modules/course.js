import Layout from "@/layout"

const CourseRouter = {
  path: '/course',
  redirect: '/course/list',
  component: Layout,
  meta: { title: '课程管理', icon: 'el-icon-collection' },
  children: [{
    path: 'list',
    name: 'courselist',
    component: () => import('@/views/course/list/index'),
    meta: { title: '课程列表', icon: 'el-icon-notebook-1' }
  }, {
    path: 'detail',
    name: 'coursedetail',
    hidden: true,
    component: () => import('@/views/course/detail/index'),
    meta: { title: '课程详情', activeMenu: '/course/list' }
  }, {
    path: 'add',
    name: 'coursedadd',
    component: () => import('@/views/course/add/index'),
    meta: { title: '新增课程', icon: 'el-icon-notebook-2' }
  }]
}

export default CourseRouter
