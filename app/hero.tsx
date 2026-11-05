import { useRef, type PointerEvent } from "react";

const css = `
.vx{--bg:#08090a;--panel:#0e1013;--side:#0a0b0d;--hov:#171b20;--line:#262c34;--text:#f2f5f8;--mute:#aab2be;--dim:#7b8491;--body:#d0d6df;--acc:#5eead4;--r:3px;position:relative;overflow:hidden;background:radial-gradient(circle at top,rgba(94,234,212,.07),transparent 24%),var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.vx *,.vx *::before,.vx *::after{box-sizing:border-box;border-radius:var(--r)}
.vx-wrap{max-width:1180px;margin:0 auto;padding:0 24px}
.vx-nav{display:flex;align-items:center;justify-content:space-between;padding:20px 0;font-size:14px}
.vx-logo{display:flex;align-items:center;gap:9px;color:var(--text);font-weight:600;font-size:17px}
.vx-logo i,.vx-ws i{display:block;width:18px;height:18px;background:linear-gradient(135deg,var(--acc) 0 50%,#2a7f74 50% 100%)}
.vx-links{display:flex;gap:28px}
.vx-links a{color:var(--mute);text-decoration:none}
.vx-btn{display:inline-block;border:1px solid var(--line);padding:11px 18px;font:inherit;font-weight:600;color:var(--text);text-decoration:none;cursor:pointer;background:transparent}
.vx-btn-p,.vx-btn-sm{background:var(--text);color:#08090a;border-color:var(--text)}
.vx-btn-sm{padding:8px 14px;font-size:13px}
.vx-btn:focus-visible{outline:2px solid var(--acc);outline-offset:2px}
.vx-hero{padding-top:64px}
.vx h1{font-size:clamp(34px,6vw,60px);line-height:1.05;letter-spacing:-.03em;font-weight:600;margin:0 0 18px;max-width:13em}
.vx-sub{color:var(--mute);font-size:clamp(16px,2vw,19px);line-height:1.5;max-width:32em;margin:0 0 28px}
.vx-cta{display:flex;gap:12px;flex-wrap:wrap}
.vx h1,.vx-sub,.vx-cta{position:relative;z-index:3}
.vx-stage{position:relative;perspective:2400px;height:740px}
.vx-stage::before{content:"";position:absolute;inset:auto 11% -17% 11%;height:210px;background:radial-gradient(circle,rgba(94,234,212,.12),transparent 62%);filter:blur(44px);pointer-events:none}
.vx-tilt{position:absolute;top:240px;right:-6%;width:1120px;height:700px;transform-origin:top right;transform:rotateX(calc(44deg + var(--vx-y,0deg))) rotateZ(calc(12deg + var(--vx-z,0deg)));transition:transform .3s ease-out;-webkit-mask-image:linear-gradient(to bottom,#000 50%,transparent 96%);mask-image:linear-gradient(to bottom,#000 50%,transparent 96%);will-change:transform}
.vx-app{display:grid;grid-template-columns:200px 350px 1fr;height:100%;background:var(--panel);border:1px solid #2f3640;overflow:hidden;font-size:15px;box-shadow:0 60px 140px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.07)}
.vx-side{background:var(--side);border-right:1px solid var(--line);padding:16px 10px}
.vx-ws{display:flex;align-items:center;gap:9px;font-weight:600;font-size:16px;padding:2px 8px 18px}
.vx-it{display:flex;align-items:center;gap:10px;padding:8px 9px;color:var(--mute);margin-bottom:2px}
.vx-it.vx-on{background:var(--hov);color:var(--text)}
.vx-it u{width:12px;height:12px;border:1.5px solid currentColor;opacity:.75;text-decoration:none}
.vx-it em{margin-left:auto;font-style:normal;font-size:12px;color:var(--text)}
.vx-side h6{margin:20px 9px 6px;font-size:12.5px;color:var(--dim);font-weight:500}
.vx-list{border-right:1px solid var(--line);overflow:hidden}
.vx-lh{display:flex;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--line);font-weight:600;font-size:16px}
.vx-lh span{color:var(--dim);font-weight:400;font-size:14px}
.vx-row{display:grid;grid-template-columns:30px 1fr auto;gap:12px;padding:14px 16px;border-bottom:1px solid #181c21;align-items:start}
.vx-row.vx-on{background:var(--hov);box-shadow:inset 2px 0 var(--acc)}
.vx-av{width:30px;height:30px;display:grid;place-items:center;font-size:11.5px;font-weight:700;color:#08090a}
.vx-row b{display:block;font-weight:600;font-size:15px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vx-row span{display:block;color:var(--mute);font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vx-row time{color:var(--dim);font-size:13px}
.vx-a1{background:#5eead4}.vx-a2{background:#c9b9ff}.vx-a3{background:#f5c26b}.vx-a4{background:#86efb0}.vx-a5{background:#f58a97}.vx-a6{background:#9bbcf7}
.vx-main{overflow:hidden}
.vx-top{display:flex;justify-content:space-between;align-items:center;padding:15px 30px;border-bottom:1px solid var(--line);color:var(--dim);font-size:14px}
.vx-top b{color:var(--mute);font-weight:500}
.vx-chip{border:1px solid var(--line);padding:5px 11px;color:var(--mute);font-size:13px}
.vx-body{padding:28px 32px}
.vx-body h3{margin:0 0 16px;font-size:27px;line-height:1.2;letter-spacing:-.02em;font-weight:600}
.vx-props{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}
.vx-props span{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);padding:5px 11px;color:var(--mute);font-size:13.5px}
.vx-props i{width:9px;height:9px;background:var(--acc)}
.vx-body p{color:var(--body);font-size:15.5px;line-height:1.65;margin:0 0 16px}
.vx code{font:13.5px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;background:var(--hov);border:1px solid var(--line);padding:1px 7px;color:var(--text)}
.vx-code{background:#0a0c0e;border:1px solid var(--line);padding:16px 18px;margin-bottom:18px;font:14px/1.75 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#c3cad5}
.vx-code>span{display:block}
.vx-l1{padding-left:2ch}.vx-l2{padding-left:4ch}
.vx-k{color:#c9b9ff}.vx-s{color:#86efb0}.vx-c{color:#7b8491}.vx-f{color:var(--acc)}
.vx-act{border-top:1px solid var(--line);padding-top:16px;color:var(--mute);font-size:14px;line-height:2}
.vx-act b{color:var(--text);font-weight:500}
@media (max-width:720px){.vx-links{display:none}.vx-stage{height:430px}.vx-tilt{top:120px;right:-28%;transform:rotateX(44deg) rotateZ(12deg) scale(.4)}}
@media (prefers-reduced-motion:reduce){.vx-tilt{transition:none}}
`;

export default function Hero() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = tiltRef.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--vx-z", `${x * -6}deg`);
    el.style.setProperty("--vx-y", `${y * -6}deg`);
  };

  const onLeave = () => {
    tiltRef.current?.style.removeProperty("--vx-z");
    tiltRef.current?.style.removeProperty("--vx-y");
  };

  return (
    <section className="vx" onPointerMove={onMove} onPointerLeave={onLeave}>
      <style>{css}</style>
      <div className="vx-wrap">
<header className="vx-nav">
  <div className="vx-logo"><i />VexelLabs</div>
  <nav className="vx-links"><a href="#services">Services</a><a href="#process">Process</a><a href="#stack">Technology</a><a href="#contact">Contact</a></nav>
  <a className="vx-btn vx-btn-sm" href="#contact">Get started</a>
</header>
<div className="vx-hero">
  <h1>Software built with you, shipped on schedule</h1>
  <p className="vx-sub">VexelLabs designs, builds, and runs web and mobile products. You see every task, release, and fix as it happens.</p>
  <div className="vx-cta"><a className="vx-btn vx-btn-p" href="#contact">Start a project</a><a className="vx-btn" href="#work">See our work</a></div>
  <div className="vx-stage" aria-hidden="true">
    <div className="vx-tilt" ref={tiltRef}>
      <div className="vx-app">
        <aside className="vx-side">
          <div className="vx-ws"><i />VexelLabs</div>
          <div className="vx-it vx-on"><u />Inbox<em>4</em></div>
          <div className="vx-it"><u />My tasks</div>
          <h6>Workspace</h6>
          <div className="vx-it"><u />Projects</div>
          <div className="vx-it"><u />Releases</div>
          <div className="vx-it"><u />Clients</div>
          <div className="vx-it"><u />Support</div>
          <h6>Teams</h6>
          <div className="vx-it"><u />Web</div>
          <div className="vx-it"><u />Mobile</div>
          <div className="vx-it"><u />Backend</div>
        </aside>
        <div className="vx-list">
          <div className="vx-lh">Inbox <span>4 unread</span></div>
          <div className="vx-row vx-on"><div className="vx-av vx-a1">AK</div><div><b>VX-214 Offline check-in sync</b><span>Amara moved it to In review</span></div><time>2h</time></div>
          <div className="vx-row"><div className="vx-av vx-a2">DM</div><div><b>Retail storefront launch</b><span>Daniel: client approved checkout</span></div><time>5h</time></div>
          <div className="vx-row"><div className="vx-av vx-a3">SN</div><div><b>VX-219 Payment webhook retries</b><span>Sarah assigned you</span></div><time>1d</time></div>
          <div className="vx-row"><div className="vx-av vx-a4">JO</div><div><b>Clinic booking portal</b><span>Release 1.2 deployed to production</span></div><time>1d</time></div>
          <div className="vx-row"><div className="vx-av vx-a5">RT</div><div><b>VX-207 Slow report export</b><span>Response time above target</span></div><time>2d</time></div>
          <div className="vx-row"><div className="vx-av vx-a6">PL</div><div><b>School records import</b><span>Waiting on client data</span></div><time>3d</time></div>
        </div>
        <div className="vx-main">
          <div className="vx-top"><span><b>Mobile</b> / Fleet tracker / VX-214</span><span className="vx-chip">Mark as done</span></div>
          <div className="vx-body">
            <h3>Queue check-ins while the driver is offline</h3>
            <div className="vx-props"><span><i />In review</span><span>Amara K.</span><span>High priority</span><span>Due Friday</span></div>
            <p>Drivers lose signal in rural areas, and check-ins sent from there are dropped. Writes should be saved on the device and sent when the connection returns, using <code>flushQueue()</code> triggered by the <code>NetInfo</code> listener.</p>
            <div className="vx-code">
              <span className="vx-c">// sync.ts</span>
              <span><b className="vx-k">export async function</b> <b className="vx-f">flushQueue</b>(db: Db) {"{"}</span>
              <span className="vx-l1"><b className="vx-k">const</b> jobs = <b className="vx-k">await</b> db.queue.<b className="vx-f">pending</b>();</span>
              <span className="vx-l1"><b className="vx-k">for</b> (<b className="vx-k">const</b> job <b className="vx-k">of</b> jobs) {"{"}</span>
              <span className="vx-l2"><b className="vx-k">await</b> api.<b className="vx-f">post</b>(<b className="vx-s">&quot;/checkins&quot;</b>, job.payload);</span>
              <span className="vx-l2"><b className="vx-k">await</b> db.queue.<b className="vx-f">remove</b>(job.id);</span>
              <span className="vx-l1">{"}"}</span>
              <span>{"}"}</span>
            </div>
            <div className="vx-act">
              <div><b>Amara</b> opened pull request #381, 3h ago</div>
              <div><b>Daniel</b> approved the change, 2h ago</div>
              <div><b>Deploy bot</b> released 2.4 to production, 2h ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}