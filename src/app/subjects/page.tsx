import { Card, CardContent } from "@/components/ui/card"

const subjects = [
  { name: "Science", bgColor: "bg-[rgb(0,255,255)]" },
  { name: "Social Studies", bgColor: "bg-[rgb(0,255,255)]" },
  { name: "Maths", bgColor: "bg-[rgb(0,255,255)]" },
  { name: "Computer", bgColor: "bg-[rgb(0,255,255)]" },
  { name: "Drawing", bgColor: "bg-[rgb(0,255,255)]" },
  { name: "Eng Vocabulary", bgColor: "bg-[rgb(0,255,255)]" },
]

export default function SubjectCards() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Branch Card */}
          <Card className="bg-gray-800 border-gray-700 flex-grow sm:w-1/4">
            <CardContent className="p-4">
              <h2 className="text-sm font-medium text-gray-400 mb-1">Branch</h2>
              <p className="text-lg font-semibold text-white">Computer Science</p>
            </CardContent>
          </Card>
          {/* Semester Card */}
          <Card className="bg-gray-800 border-gray-700 flex-grow sm:w-1/4">
            <CardContent className="p-4">
              <h2 className="text-sm font-medium text-gray-400 mb-1">Semester</h2>
              <p className="text-lg font-semibold text-white">Third Semester</p>
            </CardContent>
          </Card>
        </div>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card
              key={subject.name}
              className={`${subject.bgColor} border-none hover:shadow-lg hover:shadow-black/30 transition-shadow`}
            >
              <CardContent className="p-8 flex items-center justify-center h-48">
                <h3 className="text-3xl font-semibold text-white text-center">{subject.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

