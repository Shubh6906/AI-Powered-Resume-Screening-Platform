import re


def calculate_match_score(
    resume_skills,
    job_requirements,
):
    requirement_skills = []

    for skill in re.split(
        r"[,\\n]",
        job_requirements,
    ):
        skill = skill.strip()

        if skill:
            requirement_skills.append(
                skill
            )

    matched_skills = []
    missing_skills = []

    for skill in requirement_skills:
        found = False

        for resume_skill in resume_skills:
            if (
                skill.lower()
                ==
                resume_skill.lower()
            ):
                found = True
                break

        if found:
            matched_skills.append(
                skill
            )
        else:
            missing_skills.append(
                skill
            )

    if len(requirement_skills) == 0:
        match_score = 0
    else:
        match_score = round(
            (
                len(matched_skills)
                /
                len(requirement_skills)
            )
            * 100,
            2,
        )

    return {
        "match_score": match_score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
    }