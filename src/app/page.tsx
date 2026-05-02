const services = [
  {
    icon: "浴",
    title: "基础香波洗护",
    description: "温水冲洗、专用香波、护毛素、吹干拉毛、脚底毛和指甲基础修整。",
    price: "小型犬 ¥88 起"
  },
  {
    icon: "剪",
    title: "美容造型修剪",
    description: "按品种特征和主人偏好修剪，含圆头、泰迪装、清爽短毛等常见造型。",
    price: "全身修剪 ¥168 起"
  },
  {
    icon: "护",
    title: "皮毛 SPA 护理",
    description: "适合换毛期、毛发干枯和皮肤敏感宠物，帮助毛发蓬松顺滑。",
    price: "护理加项 ¥58 起"
  },
  {
    icon: "洁",
    title: "耳眼口腔清洁",
    description: "耳道清洁、泪痕擦拭、牙齿护理和肛门腺清理，保持日常卫生。",
    price: "单项 ¥25 起"
  }
];

const careSteps = [
  {
    num: "01",
    title: "到店评估",
    description: "确认宠物状态、毛结、皮肤情况和主人护理需求。",
    image: "/assets/care-step-01-assessment.png",
    alt: "高端宠物洗护店内美容师为狗狗做入店评估"
  },
  {
    num: "02",
    title: "分区洗护",
    description: "犬猫分区操作，工具独立消毒，降低交叉接触风险。",
    image: "/assets/care-step-02-wash.png",
    alt: "高端宠物洗护店内美容师在犬猫分区洗护间为狗狗洗澡"
  },
  {
    num: "03",
    title: "吹干修整",
    description: "根据宠物接受度调节风力和温度，完成拉毛、修剪和清洁。",
    image: "/assets/care-step-03-dry-trim.png",
    alt: "高端宠物洗护店内美容师为宠物吹干拉毛并准备修整"
  },
  {
    num: "04",
    title: "护理反馈",
    description: "离店前同步毛发、皮肤、耳道和指甲情况，方便居家护理。",
    image: "/assets/care-step-04-feedback.png",
    alt: "高端宠物洗护店内美容师向主人说明护理反馈"
  }
];

const reviews = [
  {
    title: "“洗完像换了一只”",
    body: "我家比熊容易打结，美容师很耐心，修完圆圆的，回家也没有紧张。"
  },
  {
    title: "“猫咪洗护很稳”",
    body: "提前沟通了猫咪胆小的问题，全程没有强迫，吹干也特别细致。"
  },
  {
    title: "“环境干净放心”",
    body: "能看到工具消毒和分区操作，预约时间也准，周末不用排队。"
  }
];

const hours = [
  ["周一至周五", "10:00 - 20:00"],
  ["周六至周日", "09:30 - 21:00"],
  ["节假日", "预约优先"]
];

const arrivalTimes = [
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30"
];

const inputClass =
  "min-h-12 w-full rounded-lg border border-[var(--line)] bg-[#fbfaf6] px-[13px] py-3 text-[#21312a] outline-none transition focus:border-[var(--mint-deep)] focus:shadow-[0_0_0_3px_rgba(91,148,118,.16)]";

export default function Home() {
  return (
    <>
      <header
        className="sticky top-0 z-10 border-b border-[rgba(219,228,221,.85)] bg-[rgba(251,250,246,.88)] backdrop-blur-[14px]"
        aria-label="主导航"
      >
        <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between gap-6 px-6 max-sm:h-[62px] max-sm:px-4">
          <a
            className="flex items-center gap-2.5 whitespace-nowrap text-xl font-extrabold max-sm:text-lg"
            href="#top"
            aria-label="暖爪宠物洗护首页"
          >
            <span
              className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[var(--mint)] text-[21px] text-[var(--mint-deep)]"
              aria-hidden="true"
            >
              ♡
            </span>
            暖爪宠物洗护
          </a>
          <nav
            className="flex items-center gap-6 text-[15px] text-[var(--muted)] max-[900px]:hidden"
            aria-label="页面导航"
          >
            <a href="#services">服务</a>
            <a href="#care">流程</a>
            <a href="#reviews">口碑</a>
            <a href="#booking">预约</a>
          </nav>
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--coral)] px-[18px] font-bold text-white shadow-[0_10px_22px_rgba(233,130,101,.24)] max-sm:min-h-10 max-sm:px-3 max-sm:text-sm"
            href="#booking"
          >
            立即预约
          </a>
        </div>
      </header>

      <main id="top">
        <section
          className="relative isolate grid min-h-[calc(100vh-68px)] items-end overflow-hidden bg-[#1f3029] after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(90deg,rgba(19,33,27,.84)_0%,rgba(19,33,27,.6)_46%,rgba(19,33,27,.16)_100%)] max-sm:min-h-[620px] max-sm:after:bg-[linear-gradient(180deg,rgba(19,33,27,.36)_0%,rgba(19,33,27,.9)_100%)]"
          aria-label="暖爪宠物洗护首屏"
        >
          <picture className="absolute inset-0 -z-20">
            <source
              media="(max-width: 700px)"
              srcSet="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=82"
            />
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1800&q=84"
              alt="洗护后的狗狗坐在明亮的宠物店里"
            />
          </picture>
          <div className="mx-auto w-[min(1180px,calc(100%-48px))] py-[72px] pb-24 text-white max-sm:w-[calc(100%-32px)] max-sm:py-[58px] max-sm:pb-[72px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,.22)] bg-[rgba(255,255,255,.16)] px-3 py-[7px] text-sm font-bold">
              犬猫分区洗护 · 一宠一巾一消毒
            </span>
            <h1 className="my-[22px] mb-4 max-w-[720px] text-[clamp(42px,7vw,82px)] font-extrabold leading-[1.05]">
              让每只毛孩子干净、松软、安心回家
            </h1>
            <p className="mb-8 max-w-[620px] text-[19px] text-[rgba(255,255,255,.88)] max-sm:text-[17px]">
              暖爪宠物洗护提供专业洗澡美容、除结梳毛、皮毛护理和基础健康清洁。预约制接待，减少等待和应激。
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--coral)] px-[18px] font-bold text-white shadow-[0_10px_22px_rgba(233,130,101,.24)]" href="#booking">
                预约洗护
              </a>
              <a className="hero-secondary-button px-[18px]" href="#services">
                查看服务
              </a>
            </div>
          </div>
        </section>

        <div
          className="relative z-[2] mx-auto -mt-11 grid w-[min(1180px,calc(100%-48px))] grid-cols-3 border border-[var(--line)] bg-white shadow-[0_18px_48px_rgba(42,61,51,.14)] max-[900px]:mt-0 max-[900px]:w-full max-[900px]:grid-cols-1 max-[900px]:border-x-0"
          aria-label="门店亮点"
        >
          {[
            ["30+", "细分护理检查点"],
            ["1:1", "美容师全程照看"],
            ["4.9", "顾客综合评分"]
          ].map(([value, label]) => (
            <div
              className="min-h-[104px] border-r border-[var(--line)] p-6 last:border-r-0 max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:last:border-b-0"
              key={label}
            >
              <strong className="mb-2 block text-3xl leading-none">{value}</strong>
              <span className="text-sm text-[var(--muted)]">{label}</span>
            </div>
          ))}
        </div>

        <section id="services" className="px-6 py-[86px] max-sm:px-4 max-sm:py-16">
          <div className="mx-auto max-w-[1180px]">
            <SectionHead
              eyebrow="洗护服务"
              title="从日常清洁到精致造型，一次打理到位"
              body="根据宠物体型、毛量、皮肤状态和性格安排护理方式。敏感皮肤可选温和配方，长毛宠物可加做深层梳理。"
            />

            <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-1 max-sm:gap-3">
              {services.map((service) => (
                <article
                  className="flex min-h-[276px] flex-col justify-between rounded-lg border border-[var(--line)] bg-white p-[22px]"
                  key={service.title}
                >
                  <div>
                    <div
                      className="grid h-[46px] w-[46px] place-items-center rounded-full bg-[var(--mint)] text-[22px]"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </div>
                    <h3 className="mb-2 mt-5 text-[21px] font-bold leading-[1.2]">
                      {service.title}
                    </h3>
                    <p className="m-0 text-[15px] text-[var(--muted)]">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 font-extrabold text-[var(--mint-deep)]">
                    {service.price}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="care" className="bg-[#eef6f2] px-6 py-[86px] max-sm:px-4 max-sm:py-16">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[.95fr_1.05fr] items-center gap-[34px] max-[900px]:grid-cols-1">
            <div
              className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1"
              aria-label="AI 绘制的洗护流程示意图"
            >
              {careSteps.map((step) => (
                <figure
                  className="relative m-0 min-h-[220px] overflow-hidden rounded-lg border border-[rgba(255,255,255,.72)] shadow-[0_12px_30px_rgba(42,61,51,.12)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[46%] after:bg-[linear-gradient(180deg,rgba(19,33,27,0)_0%,rgba(19,33,27,.66)_100%)] max-sm:min-h-[260px]"
                  key={step.num}
                >
                  <img
                    className="h-full w-full object-cover"
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-3 left-3.5 right-3.5 z-[1] flex items-center justify-between gap-2.5 text-[15px] font-extrabold text-white [text-shadow:0_1px_12px_rgba(0,0,0,.32)]">
                    <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-full bg-[rgba(255,255,255,.88)] text-[#21312a] [text-shadow:none]">
                      {step.num}
                    </span>
                    {step.title}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div>
              <p className="mb-2 text-sm font-extrabold text-[var(--coral-dark)]">
                护理流程
              </p>
              <h2 className="m-0 text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.14]">
                预约制服务，减少宠物等待和陌生环境压力
              </h2>
              <div className="mt-[34px] grid gap-3.5">
                {careSteps.map((step) => (
                  <article
                    className="grid grid-cols-[56px_1fr] gap-4 rounded-lg border border-[rgba(91,148,118,.22)] bg-[rgba(255,255,255,.72)] p-[18px]"
                    key={step.num}
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--mint-deep)] font-extrabold text-white">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="mb-2 mt-0 text-[21px] font-bold leading-[1.2]">
                        {step.title}
                      </h3>
                      <p className="m-0 text-[15px] text-[var(--muted)]">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="px-6 py-[86px] max-sm:px-4 max-sm:py-16">
          <div className="mx-auto max-w-[1180px]">
            <SectionHead
              eyebrow="顾客口碑"
              title="熟悉的美容师，稳定的护理体验"
              body="我们记录宠物的洗护习惯、敏感点和偏好，下一次到店可以更快进入状态。"
            />
            <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {reviews.map((review) => (
                <article
                  className="rounded-lg border border-[var(--line)] bg-white p-6"
                  key={review.title}
                >
                  <div className="text-xl text-[var(--sun)]" aria-label="五星评价">
                    ★★★★★
                  </div>
                  <h3 className="mb-2 mt-5 text-[21px] font-bold leading-[1.2]">
                    {review.title}
                  </h3>
                  <p className="m-0 text-[15px] text-[var(--muted)]">
                    {review.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="px-6 py-[86px] max-sm:px-4 max-sm:py-16">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[.9fr_1.1fr] items-start gap-[34px] max-[900px]:grid-cols-1">
            <aside className="min-h-full rounded-lg bg-[var(--ink)] p-8 text-white max-sm:p-[22px]">
              <p className="mb-2 text-sm font-extrabold text-[var(--coral-dark)]">
                到店信息
              </p>
              <h2 className="m-0 text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.14]">
                今天就给毛孩子安排一次轻松洗护
              </h2>
              <p className="mt-6 text-[rgba(255,255,255,.78)]">
                地址：上海市静安区花园路 88 号 1F
                <br />
                电话：021-6688-9527
                <br />
                微信：WarmPawsCare
              </p>
              <div className="mt-[26px] grid gap-3" aria-label="营业时间">
                {hours.map(([day, time]) => (
                  <div
                    className="flex justify-between gap-[18px] border-b border-[rgba(255,255,255,.16)] pb-3"
                    key={day}
                  >
                    <span>{day}</span>
                    <strong>{time}</strong>
                  </div>
                ))}
              </div>
            </aside>

            <form
              className="rounded-lg border border-[var(--line)] bg-white p-[30px] shadow-[0_18px_48px_rgba(42,61,51,.14)] max-sm:p-[22px]"
              action="#"
              method="post"
              aria-label="预约表单"
            >
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <FormLabel text="主人姓名">
                  <input
                    className={inputClass}
                    name="name"
                    type="text"
                    placeholder="例如：林小姐"
                    required
                  />
                </FormLabel>
                <FormLabel text="联系电话">
                  <input
                    className={inputClass}
                    name="phone"
                    type="tel"
                    placeholder="用于确认预约"
                    required
                  />
                </FormLabel>
                <FormLabel text="宠物类型">
                  <select className={inputClass} name="pet" required defaultValue="">
                    <option value="">请选择</option>
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>猫咪</option>
                    <option>其他宠物</option>
                  </select>
                </FormLabel>
                <FormLabel text="预约服务">
                  <select
                    className={inputClass}
                    name="service"
                    required
                    defaultValue=""
                  >
                    <option value="">请选择</option>
                    <option>基础香波洗护</option>
                    <option>美容造型修剪</option>
                    <option>皮毛 SPA 护理</option>
                    <option>耳眼口腔清洁</option>
                  </select>
                </FormLabel>
                <FormLabel text="希望日期">
                  <input className={inputClass} name="date" type="date" required />
                </FormLabel>
                <FormLabel text="期望到店时间">
                  <select
                    className={inputClass}
                    name="arrivalTime"
                    required
                    defaultValue=""
                  >
                    <option value="">请选择时间</option>
                    {arrivalTimes.map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </FormLabel>
                <FormLabel text="备注" className="col-span-full">
                  <textarea
                    className={`${inputClass} min-h-28 resize-y`}
                    name="note"
                    placeholder="可以填写宠物年龄、体重、毛结情况、是否怕吹风等"
                  />
                </FormLabel>
                <button
                  className="col-span-full inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--coral)] px-[18px] font-bold text-white shadow-[0_10px_22px_rgba(233,130,101,.24)]"
                  type="submit"
                >
                  提交预约
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#17241f] px-6 py-[34px] text-[rgba(255,255,255,.72)]">
        <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-6">
          <span>© 2026 暖爪宠物洗护 Warm Paws Care</span>
          <span>犬猫洗护 · 美容修剪 · 皮毛护理 · 到店预约</span>
        </div>
      </footer>
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mb-[34px] flex items-end justify-between gap-7 max-[900px]:block">
      <div>
        <p className="mb-2 text-sm font-extrabold text-[var(--coral-dark)]">
          {eyebrow}
        </p>
        <h2 className="m-0 text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.14]">
          {title}
        </h2>
      </div>
      <p className="m-0 max-w-[430px] text-[var(--muted)] max-[900px]:mt-3">
        {body}
      </p>
    </div>
  );
}

function FormLabel({
  text,
  className = "",
  children
}: {
  text: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`grid gap-2 text-sm font-bold text-[var(--muted)] ${className}`}
    >
      {text}
      {children}
    </label>
  );
}
