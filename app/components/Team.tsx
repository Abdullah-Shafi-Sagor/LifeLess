const teamMembers = [
  {
    name: 'Dr. Elena V. Torres',
    role: 'Principal Investigator',
    bio: 'Synthetic biology, genetic circuits, and systems biology',
    avatar: '🧬',
    email: 'e.torres@lifelesslab.org',
    linkedin: '#'
  },
  {
    name: 'Dr. Marcus Chen',
    role: 'Senior Researcher',
    bio: 'Computational biology and machine learning applications',
    avatar: '💻',
    email: 'm.chen@lifelesslab.org',
    linkedin: '#'
  },
  {
    name: 'Dr. Sarah K. Patel',
    role: 'Ethics & Policy Lead',
    bio: 'Bioethics, science policy, and responsible innovation',
    avatar: '⚖️',
    email: 's.patel@lifelesslab.org',
    linkedin: '#'
  },
  {
    name: 'Dr. James Kim',
    role: 'Research Scientist',
    bio: 'Protein engineering and structural biology',
    avatar: '🧪',
    email: 'j.kim@lifelesslab.org',
    linkedin: '#'
  },
  {
    name: 'Dr. Amara Okafor',
    role: 'Postdoctoral Fellow',
    bio: 'CRISPR technology and gene editing',
    avatar: '🧫',
    email: 'a.okafor@lifelesslab.org',
    linkedin: '#'
  },
  {
    name: 'Dr. Lucas Rivera',
    role: 'Postdoctoral Fellow',
    bio: 'Microbiome engineering and synthetic ecology',
    avatar: '🦠',
    email: 'l.rivera@lifelesslab.org',
    linkedin: '#'
  },
  {
    name: 'Yuki Tanaka',
    role: 'PhD Candidate',
    bio: 'Developmental biology and gene regulation',
    avatar: '🔬',
    email: 'y.tanaka@lifelesslab.org',
    linkedin: '#'
  },
  {
    name: 'Dr. Fatima Al-Hassan',
    role: 'Collaborator',
    bio: 'Synthetic ecology and environmental biotechnology',
    avatar: '🌱',
    email: 'f.alhassan@lifelesslab.org',
    linkedin: '#'
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Our Team</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            An interdisciplinary team of scientists working together to advance synthetic biology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
              <div className="text-5xl mb-4">{member.avatar}</div>
              <h3 className="font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{member.role}</p>
              <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
              <div className="mt-4 flex justify-center space-x-3">
                <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}