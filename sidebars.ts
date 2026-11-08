import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Chapter landing page + same-named subfolder. Each category links to its
// entry page, then lists the pages inside that chapter's folder.
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '介绍',
      collapsed: false,
      link: {type: 'doc', id: 'intro'},
      items: [
        {type: 'doc', id: 'intro/what-is-nscha', label: 'NSCHA 是什么'},
        {type: 'doc', id: 'intro/why-proof-of-work', label: '为什么是计算成本'},
        {type: 'doc', id: 'intro/non-goals', label: '它不做什么'},
      ],
    },
    {
      type: 'category',
      label: '入门指南',
      collapsed: false,
      link: {type: 'doc', id: 'getting-started'},
      items: [
        {type: 'doc', id: 'getting-started/quickstart', label: '五分钟接入'},
        {type: 'doc', id: 'getting-started/form-integration', label: '表单接入'},
        {type: 'doc', id: 'getting-started/server-verification', label: '服务端校验'},
      ],
    },
    {
      type: 'category',
      label: '工作原理',
      collapsed: false,
      link: {type: 'doc', id: 'how-it-works'},
      items: [
        {type: 'doc', id: 'how-it-works/challenge', label: '索取挑战'},
        {type: 'doc', id: 'how-it-works/solving', label: '本地求解'},
        {type: 'doc', id: 'how-it-works/redeem', label: '兑换令牌'},
        {type: 'doc', id: 'how-it-works/scope-and-replay', label: '作用域与重放'},
      ],
    },
    {
      type: 'category',
      label: '隐私',
      collapsed: false,
      link: {type: 'doc', id: 'privacy'},
      items: [
        {type: 'doc', id: 'privacy/data-boundary', label: '数据边界'},
        {type: 'doc', id: 'privacy/comparison', label: '与常见方案对照'},
      ],
    },
    {
      type: 'category',
      label: '配置参考',
      collapsed: false,
      link: {type: 'doc', id: 'configuration'},
      items: [
        {type: 'doc', id: 'configuration/env-vars', label: '环境变量'},
        {type: 'doc', id: 'configuration/tuning', label: '难度与性能调优'},
      ],
    },
    {
      type: 'category',
      label: '进阶',
      collapsed: false,
      link: {type: 'doc', id: 'advanced'},
      items: [
        {type: 'doc', id: 'advanced/self-hosted-assets', label: '自托管求解器'},
        {type: 'doc', id: 'advanced/multi-instance', label: '多实例部署'},
      ],
    },
    {
      type: 'category',
      label: '局限',
      collapsed: false,
      link: {type: 'doc', id: 'limitations'},
      items: [
        {type: 'doc', id: 'limitations/honest-boundaries', label: '诚实边界'},
        {type: 'doc', id: 'limitations/troubleshooting', label: '故障排查'},
      ],
    },
    {
      type: 'category',
      label: '参考',
      collapsed: false,
      link: {type: 'doc', id: 'reference'},
      items: [
        {type: 'doc', id: 'reference/api', label: '接口参考'},
        {type: 'doc', id: 'reference/glossary', label: '术语表'},
      ],
    },
  ],
};

export default sidebars;
