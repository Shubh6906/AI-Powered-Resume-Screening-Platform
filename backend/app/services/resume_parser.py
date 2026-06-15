import re


SKILLS_DATABASE = [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
    "Django",
    "Flask",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
    "Tailwind",
    "Node.js",
]


def parse_resume(
    text: str,
):
    skills = []

    for skill in SKILLS_DATABASE:
        if re.search(
            rf"\b{re.escape(skill)}\b",
            text,
            re.IGNORECASE,
        ):
            skills.append(skill)

    education = []

    education_keywords = [
        "Diploma",
        "Bachelor",
        "B.Tech",
        "M.Tech",
        "Engineering",
        "Computer Science",
    ]

    for keyword in education_keywords:
        if keyword.lower() in text.lower():
            education.append(keyword)

    experience = []

    experience_keywords = [
        "Intern",
        "Developer",
        "Engineer",
        "Software",
    ]

    for keyword in experience_keywords:
        if keyword.lower() in text.lower():
            experience.append(keyword)

    return {
        "skills": list(set(skills)),
        "education": list(set(education)),
        "experience": list(set(experience)),
    }