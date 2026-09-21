import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Clock3,
  Code2,
  Compass,
  FileCheck2,
  FileText,
  Filter,
  GraduationCap,
  Layers3,
  LineChart,
  Menu,
  Network,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Upload,
  UserRound,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    view:
      search["view"] === "student" || search["view"] === "college" || search["view"] === "industry"
        ? search["view"]
        : ("home" as View),
  }),
  head: () => ({
    meta: [
      { title: "SKILL2PROVE — Verified Skills to Opportunities" },
      {
        name: "description",
        content:
          "Connect students, academia and industry through verified skills, internships and placements.",
      },
      { property: "og:title", content: "SKILL2PROVE — Verified Skills to Opportunities" },
      {
        property: "og:description",
        content: "Turn skills into proof and proof into real opportunities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skill2Prove,
});

type View = "home" | "student" | "college" | "industry";
type Action = { title: string; body: ReactNode } | null;

const skills = [
  {
    name: "Python",
    level: "Advanced",
    score: 92,
    status: "Verified",
    fresh: "Recent",
    color: "bg-skill-blue",
  },
  {
    name: "Machine Learning",
    level: "Intermediate",
    score: 78,
    status: "Industry Validated",
    fresh: "Active",
    color: "bg-skill-cyan",
  },
  {
    name: "React",
    level: "Intermediate",
    score: 81,
    status: "Verified",
    fresh: "Recent",
    color: "bg-skill-violet",
  },
];

const readiness = [
  { month: "Jan", value: 54 },
  { month: "Feb", value: 61 },
  { month: "Mar", value: 68 },
  { month: "Apr", value: 72 },
  { month: "May", value: 79 },
  { month: "Jun", value: 86 },
];

const demand = [
  { skill: "Gen AI", demand: 92, supply: 48 },
  { skill: "Cloud", demand: 84, supply: 57 },
  { skill: "Data", demand: 78, supply: 68 },
  { skill: "Cyber", demand: 74, supply: 42 },
  { skill: "React", demand: 69, supply: 76 },
];

const candidates = [
  {
    name: "Aarav Mehta",
    initials: "AM",
    role: "ML Engineer",
    dept: "CSE",
    score: 94,
    match: 96,
    evidence: 12,
    skills: ["Python", "Machine Learning", "SQL"],
    project: "Demand Forecasting Engine",
    result: "Top 5%",
  },
  {
    name: "Nisha Rao",
    initials: "NR",
    role: "Frontend Engineer",
    dept: "IT",
    score: 89,
    match: 91,
    evidence: 9,
    skills: ["React", "TypeScript", "UX"],
    project: "Accessible Banking Suite",
    result: "Gold",
  },
  {
    name: "Kabir Shah",
    initials: "KS",
    role: "Data Analyst",
    dept: "ECE",
    score: 86,
    match: 88,
    evidence: 11,
    skills: ["Python", "Power BI", "SQL"],
    project: "Energy Insights Platform",
    result: "Top 10%",
  },
  {
    name: "Meera Iyer",
    initials: "MI",
    role: "Cloud Engineer",
    dept: "CSE",
    score: 91,
    match: 93,
    evidence: 14,
    skills: ["AWS", "DevOps", "Python"],
    project: "Resilient Campus Cloud",
    result: "Platinum",
  },
];

function Skill2Prove() {
  const { view } = Route.useSearch();
  const [action, setAction] = useState<Action>(null);
  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header view={view} menu={menu} setMenu={setMenu} open={setAction} />
      <main>
        {view === "home" && <Home />}
        {view === "student" && <StudentDashboard open={setAction} />}
        {view === "college" && <CollegeDashboard open={setAction} />}
        {view === "industry" && <IndustryDashboard open={setAction} />}
      </main>
      {action && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-foreground/60 p-4"
          role="presentation"
          onMouseDown={() => setAction(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="action-title"
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border bg-background p-6 shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close"
              className="absolute right-3 top-3"
              onClick={() => setAction(null)}
            >
              <X />
            </Button>
            <header className="mb-5 pr-10">
              <h2 id="action-title" className="font-display text-2xl font-semibold">
                {action.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">Interactive prototype preview</p>
            </header>
            {action.body}
          </section>
        </div>
      )}
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-brand">
        <Layers3 className="size-5" />
      </div>
      <span className="font-display text-lg font-bold">
        SKILL<span className="text-brand-bright">2PROVE</span>
      </span>
    </div>
  );
}

function Header({
  view,
  menu,
  setMenu,
  open,
}: {
  view: View;
  menu: boolean;
  setMenu: (v: boolean) => void;
  open: (a: Action) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 lg:px-8">
        <Link
          to="/"
          search={{ view: "home" }}
          aria-label="Go to role selection"
          className="cursor-pointer"
        >
          <Logo />
        </Link>
        {view !== "home" && (
          <div className="hidden rounded-lg bg-muted p-1 md:flex">
            {(["student", "college", "industry"] as View[]).map((v) => (
              <Button key={v} variant={view === v ? "default" : "ghost"} size="sm" asChild>
                <Link to="/" search={{ view: v }} className="capitalize">
                  {v}
                </Link>
              </Button>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2">
          {view !== "home" && (
            <Button variant="outline" onClick={() => setMenu(!menu)} className="hidden sm:flex">
              <Zap /> Switch View <ChevronDown />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Notifications"
            onClick={() => {
              setMenu(false);
              open({
                title: "Notifications",
                body: (
                  <div className="space-y-3">
                    {[
                      "Python proof verified",
                      "TechNova viewed your profile",
                      "New internship match available",
                    ].map((item) => (
                      <div key={item} className="list-row">
                        <div>
                          <b>{item}</b>
                          <small>Recent activity</small>
                        </div>
                        <CheckCircle2 className="text-success" />
                      </div>
                    ))}
                  </div>
                ),
              });
            }}
          >
            <Bell />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMenu(!menu)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      {menu && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-x-0 bottom-0 top-16 z-30 cursor-default"
            onClick={() => setMenu(false)}
          />
          <div className="absolute right-5 top-14 z-40 w-52 rounded-lg border bg-popover p-2 shadow-xl">
            {(["student", "college", "industry"] as View[]).map((v) => (
              <Button key={v} variant="ghost" className="w-full justify-start capitalize" asChild>
                <Link to="/" search={{ view: v }} onClick={() => setMenu(false)}>
                  {v === "student" ? (
                    <GraduationCap />
                  ) : v === "college" ? (
                    <Building2 />
                  ) : (
                    <BriefcaseBusiness />
                  )}{" "}
                  {v} View
                </Link>
              </Button>
            ))}
          </div>
        </>
      )}
    </header>
  );
}

function Home() {
  const roles = [
    {
      id: "01",
      role: "STUDENT",
      desc: "Build Skills • Prove Skills • Find Opportunities",
      icon: GraduationCap,
      view: "student" as View,
      stats: "12.4K skill proofs",
    },
    {
      id: "02",
      role: "COLLEGE",
      desc: "Map Skills • Identify Gaps • Improve Placement Readiness",
      icon: Building2,
      view: "college" as View,
      stats: "84 partner colleges",
    },
    {
      id: "03",
      role: "INDUSTRY",
      desc: "Discover Talent • Create Challenges • Hire by Skills",
      icon: BriefcaseBusiness,
      view: "industry" as View,
      stats: "320 hiring partners",
    },
  ];
  return (
    <div className="hero-grid min-h-[calc(100vh-4rem)] overflow-hidden">
      <section className="mx-auto flex max-w-[1380px] flex-col items-center px-5 pb-14 pt-16 text-center lg:pt-24">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-soft bg-brand-mist px-4 py-2 text-xs font-semibold uppercase text-brand-bright">
          <Sparkles className="size-3.5" /> Skills intelligence infrastructure
        </div>
        <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">
          Turn Skills Into <span className="text-gradient">Proof.</span>
          <br />
          Turn Proof Into Opportunities.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Connecting Students, Academia and Industry through verified skills and real-world
          opportunities.
        </p>
        <div className="mt-12 grid w-full gap-5 md:grid-cols-3">
          {roles.map(({ id, role, desc, icon: Icon, view: next, stats }) => (
            <Link key={role} to="/" search={{ view: next }} className="role-card group text-left">
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-muted-foreground">{id}</span>
                <div className="grid size-12 place-items-center rounded-xl bg-brand-mist text-brand-bright transition-transform group-hover:scale-110">
                  <Icon />
                </div>
              </div>
              <h2 className="mt-12 font-display text-2xl font-bold">{role}</h2>
              <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{desc}</p>
              <div className="mt-8 flex items-center justify-between border-t pt-5">
                <span className="text-xs font-medium text-muted-foreground">{stats}</span>
                <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                  Enter workspace{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-success" /> Tamper-aware verification
          </span>
          <span className="flex items-center gap-2">
            <Network className="size-4 text-brand-bright" /> Academia–Industry connected
          </span>
          <span className="flex items-center gap-2">
            <Activity className="size-4 text-warning" /> Live skill intelligence
          </span>
        </div>
      </section>
    </div>
  );
}

function DashboardHead({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      {action}
    </div>
  );
}

function Card({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "data-card",
        onClick && "cursor-pointer hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
  sub,
}: {
  icon: typeof Activity;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-5 flex items-start justify-between">
      <div className="flex gap-3">
        <div className="grid size-9 place-items-center rounded-lg bg-brand-mist text-brand-bright">
          <Icon className="size-4" />
        </div>
        <div>
          <h2 className="font-display font-semibold">{title}</h2>
          {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
        </div>
      </div>
    </div>
  );
}

const Btn = ({
  children,
  onClick,
  variant = "outline",
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: "outline" | "default" | "secondary";
}) => (
  <Button variant={variant} onClick={onClick}>
    {children}
  </Button>
);

function StudentDashboard({ open }: { open: (a: Action) => void }) {
  const [mission, setMission] = useState(42);
  const skillBody = (
    <div className="space-y-5">
      {skills.map((s) => (
        <div key={s.name}>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-semibold">
              {s.name} · {s.level}
            </span>
            <span>{s.score}%</span>
          </div>
          <Progress value={s.score} />
          <p className="mt-2 flex items-center gap-1 text-xs text-success">
            <CheckCircle2 className="size-3.5" />
            {s.status} · {s.fresh}
          </p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="dashboard-wrap">
      <DashboardHead
        eyebrow="Student workspace · Priya Sharma"
        title="Good morning, Priya."
        description="Your proof portfolio gained momentum this week."
        action={
          <Btn
            variant="default"
            onClick={() => open({ title: "Proof-Based Resume", body: <ResumePreview /> })}
          >
            <FileText /> Generate Resume
          </Btn>
        }
      />
      <div className="grid gap-5 lg:grid-cols-12">
        <Card className="lg:col-span-3">
          <SectionTitle icon={Target} title="Career Readiness" sub="ML Engineer benchmark" />
          <div className="flex items-end gap-3">
            <strong className="font-display text-6xl">86</strong>
            <span className="mb-2 text-sm text-muted-foreground">/100</span>
          </div>
          <div className="mt-5">
            <Progress value={86} />
          </div>
          <p className="mt-3 flex items-center gap-1 text-xs font-medium text-success">
            <TrendingUp className="size-3.5" /> +8 points this month
          </p>
        </Card>
        <Card className="lg:col-span-5">
          <SectionTitle
            icon={Activity}
            title="Skill Progress Timeline"
            sub="Readiness over six months"
          />
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={readiness}>
                <defs>
                  <linearGradient id="readiness" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={11} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="var(--chart-1)"
                  strokeWidth={3}
                  fill="url(#readiness)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="lg:col-span-4">
          <SectionTitle icon={Award} title="Dynamic Skill Passport" sub="3 verified competencies" />
          {skillBody}
          <Button
            className="mt-5 w-full"
            variant="outline"
            onClick={() => open({ title: "Dynamic Skill Passport", body: skillBody })}
          >
            View full passport <ArrowRight />
          </Button>
        </Card>
        <Card className="proof-card lg:col-span-8">
          <div className="relative z-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row">
              <div>
                <p className="text-xs font-bold uppercase text-proof-muted">
                  Signature proof journey
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-proof-foreground">
                  Claim → Test → Proof
                </h2>
                <p className="mt-2 text-sm text-proof-muted">Python · Advanced competency</p>
              </div>
              <div className="proof-seal">
                <ShieldCheck />
                <span>
                  Integrity
                  <br />
                  <b>Verified</b>
                </span>
              </div>
            </div>
            <div className="mt-9 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2">
              {["Claimed", "Tested", "Practically Proven", "Industry Validated"].map((stage, i) => (
                <div className="contents" key={stage}>
                  <button
                    onClick={() =>
                      open({ title: stage, body: <ProofDetail stage={stage} index={i} /> })
                    }
                    className="proof-step"
                  >
                    <span>{i < 3 ? <Check /> : <Sparkles />}</span>
                    <b>{stage}</b>
                    <small>
                      {["Self-declared", "92% assessment", "3 projects", "TechNova Labs"][i]}
                    </small>
                  </button>
                  {i < 3 && <ArrowRight className="size-4 text-proof-muted" />}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="proof-chip">
                <Clock3 /> Skill Freshness: Recent
              </span>
              <span className="proof-chip">
                <ShieldCheck /> Proof Integrity: Verified
              </span>
              <span className="proof-chip">
                <Award /> Industry Validation: Validated
              </span>
            </div>
          </div>
        </Card>
        <Card className="lg:col-span-4">
          <SectionTitle icon={BrainCircuit} title="AI Skill Roadmap" sub="Next best actions" />
          <Roadmap />
          <Button
            className="mt-5 w-full"
            onClick={() => open({ title: "AI Skill Roadmap", body: <Roadmap detailed /> })}
          >
            <Compass /> Start Roadmap
          </Button>
        </Card>
        <Card className="lg:col-span-4">
          <SectionTitle icon={Network} title="Personal Skill Gap Map" sub="Target: ML Engineer" />
          <div className="skill-radar">
            {["Python", "ML", "Cloud", "MLOps", "SQL"].map((s, i) => (
              <button
                onClick={() =>
                  open({
                    title: `${s} Skill Gap`,
                    body: (
                      <p className="text-sm text-muted-foreground">
                        Complete two practical challenges and one peer-reviewed project to reach the
                        target competency.
                      </p>
                    ),
                  })
                }
                className={`node node-${i + 1}`}
                key={s}
              >
                {s}
              </button>
            ))}
          </div>
          <Button
            className="mt-4 w-full"
            variant="outline"
            onClick={() => open({ title: "Personal Skill Gap", body: <GapDetails /> })}
          >
            <Target /> View Skill Gap
          </Button>
        </Card>
        <Card className="lg:col-span-4">
          <SectionTitle icon={Zap} title="Industry Micro-Mission" sub="TechNova · 2 days left" />
          <h3 className="font-display text-lg font-semibold">Optimize an ML inference API</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Improve latency while preserving model accuracy.
          </p>
          <div className="mt-5">
            <div className="mb-2 flex justify-between text-xs">
              <span>Progress</span>
              <b>{mission}%</b>
            </div>
            <Progress value={mission} />
          </div>
          <Button
            className="mt-5 w-full"
            onClick={() => {
              setMission(Math.min(100, mission + 18));
              open({ title: "Challenge Workspace", body: <Challenge progress={mission} /> });
            }}
          >
            <Code2 /> Take Challenge
          </Button>
        </Card>
        <Card className="lg:col-span-4">
          <SectionTitle
            icon={BriefcaseBusiness}
            title="Internship Opportunities"
            sub="Matched to your proof profile"
          />
          {["AI Product Intern · TechNova", "Data Science Intern · Quantix"].map((x, i) => (
            <button
              key={x}
              onClick={() => open({ title: x, body: <Internship title={x} /> })}
              className="list-row"
            >
              <div>
                <b>{x}</b>
                <small>{i ? "88% match · Bengaluru" : "96% match · Hybrid"}</small>
              </div>
              <ArrowRight />
            </button>
          ))}
          <Button
            className="mt-4 w-full"
            variant="outline"
            onClick={() =>
              open({
                title: "Matched Internships",
                body: <Internship title="4 high-match opportunities" />,
              })
            }
          >
            View Internship
          </Button>
        </Card>
        <Card className="lg:col-span-6">
          <SectionTitle icon={FileCheck2} title="Skill Evidence Vault" sub="12 trusted artefacts" />
          <div className="grid grid-cols-3 gap-3">
            {[
              ["3", "Projects"],
              ["5", "Challenges"],
              ["4", "Certificates"],
            ].map(([v, l]) => (
              <button
                key={l}
                onClick={() => open({ title: `${l} Evidence`, body: <Evidence /> })}
                className="metric-box"
              >
                <b>{v}</b>
                <span>{l}</span>
              </button>
            ))}
          </div>
          <Button
            className="mt-4 w-full"
            variant="outline"
            onClick={() => open({ title: "Upload Evidence", body: <UploadBox /> })}
          >
            <Upload /> Upload Evidence
          </Button>
        </Card>
        <Card className="lg:col-span-6">
          <SectionTitle
            icon={LineChart}
            title="Verified Skills"
            sub="Portable, current and trusted"
          />
          <div className="space-y-3">
            {skills.map((s) => (
              <button
                key={s.name}
                onClick={() =>
                  open({ title: s.name, body: <ProofDetail stage={s.status} index={3} /> })
                }
                className="skill-row"
              >
                <span className={cn("size-2.5 rounded-full", s.color)} />
                <b>{s.name}</b>
                <span>{s.level}</span>
                <em>
                  <CheckCircle2 /> {s.status}
                </em>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function CollegeDashboard({ open }: { open: (a: Action) => void }) {
  const [filters, setFilters] = useState({
    dept: "All Departments",
    batch: "2026",
    skill: "All Skills",
    role: "All Roles",
  });
  const filterItems = [
    ["dept", ["All Departments", "CSE", "IT", "ECE"]],
    ["batch", ["2026", "2027", "2028"]],
    ["skill", ["All Skills", "Python", "Cloud", "React"]],
    ["role", ["All Roles", "ML Engineer", "Data Analyst", "Cloud Engineer"]],
  ] as const;
  return (
    <div className="dashboard-wrap">
      <DashboardHead
        eyebrow="College intelligence · Meridian Institute"
        title="Skills Command Center"
        description="Live view of student capability, curriculum alignment and placement readiness."
        action={
          <Button
            onClick={() =>
              open({
                title: "College Insight Report",
                body: (
                  <p className="text-sm text-muted-foreground">
                    Your institution is 78% aligned with current industry demand. Cloud and
                    cybersecurity are the highest-priority gaps.
                  </p>
                ),
              })
            }
          >
            <FileText /> Export Insight Report
          </Button>
        }
      />
      <div className="mb-6 grid gap-3 rounded-xl border bg-card p-4 sm:grid-cols-2 lg:grid-cols-4">
        {filterItems.map(([key, options]) => (
          <label key={key} className="text-xs font-semibold capitalize text-muted-foreground">
            {key === "dept" ? "Department" : key}
            <select
              value={filters[key]}
              onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
              className="mt-1.5 h-10 w-full rounded-md border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            >
              {options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: "2,840", label: "Mapped students", Icon: UsersRound, delta: "+12%" },
          { value: "78%", label: "Placement ready", Icon: Target, delta: "+6%" },
          { value: "342", label: "Verified skills", Icon: ShieldCheck, delta: "+41" },
          { value: "24", label: "Industry partners", Icon: Building2, delta: "+3" },
        ].map(({ value, label, Icon, delta }) => (
          <Card
            key={label}
            onClick={() =>
              open({
                title: label,
                body: (
                  <p className="text-sm text-muted-foreground">
                    Filtered for {filters.dept}, batch {filters.batch}. Performance is improving
                    against the previous period.
                  </p>
                ),
              })
            }
          >
            <div className="flex justify-between">
              <div>
                <strong className="font-display text-3xl">{value}</strong>
                <p className="mt-1 text-xs text-muted-foreground">{label}</p>
              </div>
              <div className="icon-box">
                <Icon />
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-success">{delta} this term</p>
          </Card>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-12">
        <Card className="lg:col-span-7">
          <SectionTitle
            icon={BarChart3}
            title="Industry Demand vs Student Supply"
            sub="Skill alignment · current filter"
          />
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demand} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="skill" axisLine={false} tickLine={false} fontSize={11} />
                <YAxis axisLine={false} tickLine={false} fontSize={11} />
                <Tooltip />
                <Bar dataKey="demand" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="supply" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-5 text-xs">
            <span>
              <i className="legend bg-chart-1" />
              Industry demand
            </span>
            <span>
              <i className="legend bg-chart-2" />
              Student supply
            </span>
          </div>
        </Card>
        <Card className="lg:col-span-5">
          <SectionTitle
            icon={Layers3}
            title="Department Skill Heatmap"
            sub="Click any cell for cohort detail"
          />
          <Heatmap open={open} />
        </Card>
        <Card
          className="lg:col-span-4"
          onClick={() => open({ title: "Curriculum Gap Detector", body: <GapDetails /> })}
        >
          <SectionTitle
            icon={Target}
            title="Curriculum Gap Detector"
            sub="7 actionable gaps found"
          />
          <div className="space-y-4">
            {[
              ["MLOps", 72],
              ["Cloud Architecture", 61],
              ["Cybersecurity", 54],
            ].map(([s, v]) => (
              <div key={String(s)}>
                <div className="mb-2 flex justify-between text-xs">
                  <b>{s}</b>
                  <span className="text-destructive">{v}% gap</span>
                </div>
                <Progress value={100 - Number(v)} />
              </div>
            ))}
          </div>
        </Card>
        <Card className="lg:col-span-4">
          <SectionTitle icon={Award} title="Placement Readiness" sub="Batch 2026" />
          <div className="flex items-center justify-around">
            <ScoreRing value={78} />
            <div className="space-y-2 text-xs">
              <p>
                <b>1,204</b> ready now
              </p>
              <p>
                <b>682</b> near ready
              </p>
              <p>
                <b>194</b> need support
              </p>
            </div>
          </div>
          <Button
            onClick={() => open({ title: "Placement Readiness", body: <ReadinessBreakdown /> })}
            className="mt-5 w-full"
            variant="outline"
          >
            Explore cohorts
          </Button>
        </Card>
        <Card className="lg:col-span-4">
          <SectionTitle
            icon={TrendingUp}
            title="Emerging Industry Skills"
            sub="90-day demand forecast"
          />
          {[
            { skill: "Generative AI", growth: "+38%" },
            { skill: "Platform Engineering", growth: "+26%" },
            { skill: "Green Computing", growth: "+19%" },
          ].map(({ skill: emergingSkill, growth }) => (
            <button
              onClick={() =>
                open({
                  title: emergingSkill,
                  body: (
                    <p className="text-sm text-muted-foreground">
                      Demand is accelerating across 18 partner employers. Recommended curriculum
                      intervention: 24 learning hours.
                    </p>
                  ),
                })
              }
              key={emergingSkill}
              className="list-row"
            >
              <div>
                <b>{emergingSkill}</b>
                <small>Industry demand trend</small>
              </div>
              <span className="text-success">{growth}</span>
            </button>
          ))}
        </Card>
        <Card className="lg:col-span-6">
          <SectionTitle
            icon={BookOpen}
            title="Skill-to-Curriculum Traceability"
            sub="Course outcome alignment"
          />
          <Traceability open={open} />
        </Card>
        <Card className="lg:col-span-3">
          <SectionTitle
            icon={UserRound}
            title="Faculty Skill Insights"
            sub="142 faculty profiles"
          />
          <div className="space-y-3">
            <MetricLine label="Industry current" value={72} />
            <MetricLine label="AI-enabled" value={64} />
            <MetricLine label="Mentor-ready" value={81} />
          </div>
          <Button
            variant="outline"
            className="mt-5 w-full"
            onClick={() => open({ title: "Faculty Insights", body: <ReadinessBreakdown /> })}
          >
            View faculty map
          </Button>
        </Card>
        <Card className="lg:col-span-3">
          <SectionTitle icon={Network} title="Collaboration Workspace" sub="6 active programs" />
          <div className="rounded-lg bg-brand-mist p-4">
            <p className="text-sm font-semibold">Cloud Innovation Lab</p>
            <p className="mt-1 text-xs text-muted-foreground">Meridian × TechNova</p>
            <div className="mt-4 flex -space-x-2">
              {["AM", "NR", "KS", "MI"].map((x) => (
                <span key={x} className="avatar-sm">
                  {x}
                </span>
              ))}
            </div>
          </div>
          <Button
            className="mt-4 w-full"
            onClick={() =>
              open({ title: "Industry Collaboration", body: <Challenge progress={68} /> })
            }
          >
            <Plus /> Open workspace
          </Button>
        </Card>
      </div>
    </div>
  );
}

function IndustryDashboard({ open }: { open: (a: Action) => void }) {
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("All Skills");
  const [shortlist, setShortlist] = useState<string[]>([]);
  const shown = useMemo(
    () =>
      candidates.filter(
        (c) =>
          (c.name + c.role + c.skills.join(" ")).toLowerCase().includes(search.toLowerCase()) &&
          (skill === "All Skills" || c.skills.includes(skill)),
      ),
    [search, skill],
  );
  return (
    <div className="dashboard-wrap">
      <DashboardHead
        eyebrow="Industry workspace · TechNova Labs"
        title="Talent Intelligence"
        description="Hire through demonstrated competency, not keyword claims."
        action={
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() =>
                open({ title: "Industry Challenge Builder", body: <ChallengeBuilder /> })
              }
            >
              <Plus /> Create Challenge
            </Button>
            <Button onClick={() => open({ title: "Competency-Based Job", body: <JobBuilder /> })}>
              <BriefcaseBusiness /> Create Job
            </Button>
          </div>
        }
      />
      <div className="grid gap-5 lg:grid-cols-12">
        <Card className="lg:col-span-3">
          <SectionTitle icon={UsersRound} title="Talent Pool" sub="Evidence-verified candidates" />
          <strong className="font-display text-4xl">4,286</strong>
          <p className="mt-2 text-xs font-medium text-success">+18% this quarter</p>
        </Card>
        <Card className="lg:col-span-3">
          <SectionTitle icon={Target} title="Avg. Skill Match" sub="Across active roles" />
          <strong className="font-display text-4xl">91%</strong>
          <Progress value={91} className="mt-4" />
        </Card>
        <Card className="lg:col-span-3">
          <SectionTitle icon={Zap} title="Active Challenges" sub="Completion this month" />
          <strong className="font-display text-4xl">18</strong>
          <p className="mt-2 text-xs text-muted-foreground">642 submissions evaluated</p>
        </Card>
        <Card className="lg:col-span-3">
          <SectionTitle
            icon={CheckCircle2}
            title="Pipeline Conversion"
            sub="Internship to placement"
          />
          <strong className="font-display text-4xl">64%</strong>
          <p className="mt-2 text-xs font-medium text-success">+9% vs last cohort</p>
        </Card>
        <Card className="lg:col-span-8">
          <SectionTitle
            icon={Search}
            title="Candidate Discovery"
            sub={`${shown.length} evidence-backed matches`}
          />
          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <label className="relative flex-1">
              <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search candidate, role or skill"
                className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="h-10 rounded-md border bg-background px-3 text-sm"
            >
              <option>All Skills</option>
              <option>Python</option>
              <option>Machine Learning</option>
              <option>React</option>
              <option>AWS</option>
            </select>
            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setSkill("All Skills");
              }}
            >
              <Filter /> Reset
            </Button>
          </div>
          <div className="space-y-2">
            {shown.map((c) => (
              <button
                key={c.name}
                onClick={() =>
                  open({
                    title: `${c.name} · Skill Passport`,
                    body: (
                      <CandidatePassport
                        candidate={c}
                        onShortlist={() => setShortlist([...new Set([...shortlist, c.name])])}
                      />
                    ),
                  })
                }
                className="candidate-row"
              >
                <span className="avatar">{c.initials}</span>
                <span className="min-w-0 flex-1">
                  <b>{c.name}</b>
                  <small>
                    {c.role} · {c.dept}
                  </small>
                </span>
                <span className="hidden flex-wrap gap-1 md:flex">
                  {c.skills.slice(0, 2).map((s) => (
                    <em key={s}>{s}</em>
                  ))}
                </span>
                <span className="score-badge">{c.match}% match</span>
                <ArrowRight />
              </button>
            ))}
          </div>
        </Card>
        <Card className="lg:col-span-4">
          <SectionTitle
            icon={BarChart3}
            title="Candidate Skill Comparison"
            sub={shortlist.length ? `${shortlist.length} shortlisted` : "Top candidates"}
          />
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={candidates.slice(0, 3)} layout="vertical">
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis dataKey="initials" type="category" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="score" fill="var(--chart-1)" radius={[0, 5, 5, 0]} />
                <Bar dataKey="match" fill="var(--chart-2)" radius={[0, 5, 5, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => open({ title: "Candidate Comparison", body: <Comparison /> })}
          >
            Compare passports
          </Button>
        </Card>
        <Card className="lg:col-span-5">
          <SectionTitle
            icon={LineChart}
            title="Skill Requirement Forecast"
            sub="Next two quarters"
          />
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={demand}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="skill" axisLine={false} tickLine={false} fontSize={10} />
                <Tooltip />
                <Area
                  dataKey="demand"
                  type="monotone"
                  stroke="var(--chart-1)"
                  fill="var(--brand-mist)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="lg:col-span-4">
          <SectionTitle
            icon={BriefcaseBusiness}
            title="Internship-to-Placement"
            sub="Active pipeline"
          />
          <div className="pipeline">
            {[
              ["Applied", 128],
              ["Challenge", 74],
              ["Internship", 42],
              ["Offered", 27],
            ].map(([s, v]) => (
              <button
                key={s}
                onClick={() => open({ title: `${s} Candidates`, body: <Comparison /> })}
              >
                <b>{v}</b>
                <span>{s}</span>
              </button>
            ))}
          </div>
        </Card>
        <Card className="lg:col-span-3">
          <SectionTitle icon={Activity} title="Industry Feedback" sub="Signal quality" />
          <ScoreRing value={92} />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            High confidence in verified evidence
          </p>
          <Button
            variant="outline"
            className="mt-4 w-full"
            onClick={() => open({ title: "Share Industry Feedback", body: <Feedback /> })}
          >
            Give feedback
          </Button>
        </Card>
      </div>
    </div>
  );
}

function ProofDetail({ stage, index }: { stage: string; index: number }) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-brand-mist p-5">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
            <Check />
          </span>
          <div>
            <b>{stage}</b>
            <p className="text-sm text-muted-foreground">
              Python competency · evidence stage {index + 1} of 4
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <MetricBox label="Assessment" value="92 / 100" />
        <MetricBox label="Freshness" value="18 days ago" />
        <MetricBox label="Integrity" value="Verified" />
        <MetricBox label="Issuer" value="TechNova Labs" />
      </div>
    </div>
  );
}
function Roadmap({ detailed }: { detailed?: boolean }) {
  return (
    <div className="space-y-3">
      {[
        ["01", "Complete MLOps foundations", "In progress"],
        ["02", "Deploy model monitoring", "Next"],
        ["03", "Industry capstone", "Locked"],
      ].map(([n, t, s], i) => (
        <div key={n} className="flex gap-3">
          <span className={cn("roadmap-dot", i === 0 && "active")}>{n}</span>
          <div>
            <b className="text-sm">{t}</b>
            <p className="text-xs text-muted-foreground">
              {s}
              {detailed && i === 0 ? " · 3 of 5 lessons" : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
function GapDetails() {
  return (
    <div className="space-y-4">
      <MetricLine label="MLOps" value={28} />
      <MetricLine label="Cloud architecture" value={39} />
      <MetricLine label="System design" value={52} />
      <p className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
        Recommended: complete the model deployment micro-mission and AWS architecture lab.
      </p>
    </div>
  );
}
function Challenge({ progress }: { progress: number }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        Build a low-latency prediction endpoint, document your decisions, and submit benchmark
        evidence.
      </p>
      <div className="my-5">
        <Progress value={progress} />
        <p className="mt-2 text-xs">Workspace progress: {progress}%</p>
      </div>
      <div className="rounded-lg border border-dashed p-5 text-center text-sm text-muted-foreground">
        <Code2 className="mx-auto mb-2" />
        Prototype coding workspace activated
      </div>
    </div>
  );
}
function Internship({ title }: { title: string }) {
  const [interested, setInterested] = useState(false);
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-brand-mist p-5">
        <b>{title}</b>
        <p className="mt-1 text-sm text-muted-foreground">
          Work on production AI systems with a senior engineering mentor.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <MetricBox label="Stipend" value="₹35K / month" />
        <MetricBox label="Duration" value="12 weeks" />
        <MetricBox label="Skill match" value="96%" />
        <MetricBox label="Applicants" value="42" />
      </div>
      <Button onClick={() => setInterested(true)} className="w-full">
        {interested ? <Check /> : <BriefcaseBusiness />}
        {interested ? "Interest recorded" : "Mark as interested"}
      </Button>
    </div>
  );
}
function Evidence() {
  return (
    <div className="space-y-3">
      {["Retail demand predictor", "Python benchmark challenge", "React analytics dashboard"].map(
        (x, i) => (
          <div key={x} className="list-row">
            <div>
              <b>{x}</b>
              <small>Verified evidence · {i + 1} month ago</small>
            </div>
            <ShieldCheck className="text-success" />
          </div>
        ),
      )}
    </div>
  );
}
function UploadBox() {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => setDone(true)}
      className="w-full rounded-xl border-2 border-dashed border-brand-soft p-10 text-center"
    >
      <Upload className="mx-auto mb-3 text-brand-bright" />
      <b>{done ? "Evidence added to review queue" : "Choose a project or certificate"}</b>
      <p className="mt-1 text-xs text-muted-foreground">
        {done ? "Verification status: Pending" : "Click to simulate upload"}
      </p>
    </button>
  );
}
function ResumePreview() {
  const [generated, setGenerated] = useState(false);
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="border-b pb-4">
        <h3 className="font-display text-2xl font-bold">Priya Sharma</h3>
        <p className="text-sm text-muted-foreground">ML Engineer · 86% career ready</p>
      </div>
      <h4 className="mt-5 text-xs font-bold uppercase text-muted-foreground">
        Proof-backed competencies
      </h4>
      {skills.map((s) => (
        <div key={s.name} className="mt-3 flex justify-between text-sm">
          <b>{s.name}</b>
          <span>
            {s.level} · {s.status}
          </span>
        </div>
      ))}
      <Button className="mt-6 w-full" onClick={() => setGenerated(true)}>
        {generated ? <Check /> : <FileText />}
        {generated ? "PDF preview generated" : "Generate PDF preview"}
      </Button>
    </div>
  );
}
function Heatmap({ open }: { open: (a: Action) => void }) {
  const vals = [
    [88, 76, 64, 91],
    [72, 84, 58, 77],
    [66, 79, 82, 69],
    [81, 62, 71, 86],
  ];
  const labels = ["Python", "Cloud", "Data", "React"];
  return (
    <div className="grid grid-cols-[auto_repeat(4,1fr)] gap-2 text-center text-xs">
      <span />
      {labels.map((x) => (
        <b key={x}>{x}</b>
      ))}
      {["CSE", "IT", "ECE", "AI&DS"].map((d, r) => (
        <div className="contents" key={d}>
          <b className="self-center text-left">{d}</b>
          {(vals[r] ?? []).map((v, c) => (
            <button
              onClick={() =>
                open({
                  title: `${d} · ${labels[c] ?? "Skill"}`,
                  body: (
                    <p className="text-sm text-muted-foreground">
                      {v}% of students meet or exceed the target competency.
                    </p>
                  ),
                })
              }
              key={c}
              className="heat-cell"
              style={{ opacity: 0.38 + v / 145 }}
            >
              {v}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
function ScoreRing({ value }: { value: number }) {
  const data = [{ v: value }, { v: 100 - value }];
  return (
    <div className="relative mx-auto size-32">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="v"
            innerRadius={45}
            outerRadius={58}
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            <Cell fill="var(--chart-1)" />
            <Cell fill="var(--muted)" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <b className="absolute inset-0 grid place-items-center font-display text-2xl">{value}%</b>
    </div>
  );
}
function MetricLine({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs">
        <span>{label}</span>
        <b>{value}%</b>
      </div>
      <Progress value={value} />
    </div>
  );
}
function Traceability({ open }: { open: (a: Action) => void }) {
  return (
    <div className="space-y-2">
      {[
        { name: "Machine Learning", alignment: "CS402 · 84% aligned" },
        { name: "Cloud Systems", alignment: "CS418 · 61% aligned" },
        { name: "Data Engineering", alignment: "CS425 · 78% aligned" },
      ].map(({ name, alignment }) => (
        <button
          key={name}
          onClick={() => open({ title: name, body: <GapDetails /> })}
          className="list-row"
        >
          <div>
            <b>{name}</b>
            <small>{alignment}</small>
          </div>
          <ArrowRight />
        </button>
      ))}
    </div>
  );
}
function ReadinessBreakdown() {
  return (
    <div className="space-y-4">
      <MetricLine label="Technical skills" value={82} />
      <MetricLine label="Applied evidence" value={74} />
      <MetricLine label="Industry validation" value={68} />
      <MetricLine label="Communication" value={86} />
    </div>
  );
}
function ChallengeBuilder() {
  const [created, setCreated] = useState(false);
  return (
    <div className="space-y-4">
      <input className="form-input" defaultValue="Build a production-ready recommendation API" />
      <textarea
        className="form-input min-h-28"
        defaultValue="Candidates must optimize inference performance and submit benchmark evidence."
      />
      <Button className="w-full" onClick={() => setCreated(true)}>
        {created ? <Check /> : <Plus />}
        {created ? "Challenge created" : "Publish mock challenge"}
      </Button>
    </div>
  );
}
function JobBuilder() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="space-y-4">
      <input className="form-input" defaultValue="Machine Learning Engineer" />
      <div className="grid grid-cols-2 gap-3">
        <MetricBox label="Python" value="Advanced" />
        <MetricBox label="MLOps" value="Intermediate" />
        <MetricBox label="Evidence" value="3 projects" />
        <MetricBox label="Freshness" value="< 6 months" />
      </div>
      <Button className="w-full" onClick={() => setSaved(true)}>
        {saved ? <Check /> : <BriefcaseBusiness />}
        {saved ? "Competency profile saved" : "Save competency profile"}
      </Button>
    </div>
  );
}
function CandidatePassport({
  candidate,
  onShortlist,
}: {
  candidate: (typeof candidates)[number];
  onShortlist: () => void;
}) {
  const [added, setAdded] = useState(false);
  const levels = ["Advanced", "Intermediate", "Verified"];
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4 rounded-xl bg-brand-mist p-5">
        <span className="avatar size-14 text-lg">{candidate.initials}</span>
        <div>
          <h3 className="font-display text-xl font-bold">{candidate.name}</h3>
          <p className="text-sm text-muted-foreground">
            {candidate.role} · {candidate.score} proof score
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {candidate.skills.map((s, i) => (
          <MetricBox key={s} label={s} value={levels[i] ?? "Verified"} />
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <MetricBox label="Featured project" value={candidate.project} />
        <MetricBox label="Challenge result" value={candidate.result} />
        <MetricBox label="Evidence items" value={String(candidate.evidence)} />
        <MetricBox label="Verification" value="Integrity passed" />
      </div>
      <Button
        className="w-full"
        onClick={() => {
          onShortlist();
          setAdded(true);
        }}
      >
        {added ? <Check /> : <Plus />}
        {added ? "Added to shortlist" : "Add to shortlist"}
      </Button>
    </div>
  );
}
function Comparison() {
  return (
    <div className="space-y-3">
      {candidates.slice(0, 3).map((c) => (
        <div key={c.name} className="flex items-center gap-3 rounded-lg border p-3">
          <span className="avatar">{c.initials}</span>
          <div className="flex-1">
            <b className="text-sm">{c.name}</b>
            <Progress value={c.match} className="mt-2" />
          </div>
          <b>{c.match}%</b>
        </div>
      ))}
    </div>
  );
}
function Feedback() {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        How useful was verified evidence in your hiring decision?
      </p>
      <div className="my-5 flex justify-between">
        {[1, 2, 3, 4, 5].map((n) => (
          <Button
            key={n}
            variant={selected === n ? "default" : "outline"}
            size="icon"
            onClick={() => setSelected(n)}
          >
            {n}
          </Button>
        ))}
      </div>
      {selected > 0 && (
        <p className="rounded-lg bg-brand-mist p-4 text-center text-sm font-medium">
          Thanks — feedback captured for the demo.
        </p>
      )}
    </div>
  );
}
function MetricBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-box text-left">
      <span>{label}</span>
      <b className="mt-1 text-sm">{value}</b>
    </div>
  );
}
