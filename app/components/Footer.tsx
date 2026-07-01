export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                 <img src="/logo/LifeLess LOGo.png" alt="LifeLess Lab logo" className="h-11 w-11 rounded-2xl border border-white/10 bg-slate-950 object-cover shadow-lg shadow-brand/20" />
              </div>
              <span className="text-xl font-bold">LifeLess Lab</span>
            </div>
            <p className="text-gray-400 text-sm">
              Pioneering synthetic biology research for a better future.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#publications" className="hover:text-white transition">Publications</a></li>
              <li><a href="#team" className="hover:text-white transition">Team</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Research Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Synthetic Biology</li>
              <li>Systems Biology</li>
              <li>Bioethics</li>
              <li>Protein Engineering</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">Stay updated with our research</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 rounded-r-lg text-sm font-medium hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 LifeLess Lab. All rights reserved. Built with Next.js</p>
        </div>
      </div>
    </footer>
  )
}