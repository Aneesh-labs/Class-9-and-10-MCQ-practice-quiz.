import json

new_qs = [
  {
    "prompt": "Under which of the following conditions can a concave mirror produce an erect, enlarged image of an object?",
    "answer": "The object is positioned between the pole P and the principal focus F",
    "question_type": "both",
    "options": [
      "The object is positioned at the centre of curvature C",
      "The object is positioned between the focus F and the centre of curvature C",
      "The object is positioned between the pole P and the principal focus F",
      "The object is positioned beyond the centre of curvature C"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Think about virtual images formed by concave mirrors.",
    "explanation": "When an object is placed between the pole P and principal focus F of a concave mirror, the reflected rays diverge. When projected backward behind the reflecting surface, they intersect to form a virtual, erect, and magnified image (m > +1).",
    "difficulty": 2
  },
  {
    "prompt": "A ray of light enters from medium A into medium B. The refractive index of medium B relative to medium A is 0.85. Which statement accurately describes the path of the light ray?",
    "answer": "The ray bends away from the normal because medium B is optically rarer than medium A",
    "question_type": "both",
    "options": [
      "The ray bends towards the normal because medium B is optically denser",
      "The ray bends away from the normal because medium B is optically rarer than medium A",
      "The ray continues undeflected with a lower velocity in medium B",
      "The ray experiences total internal absorption"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Consider the relationship between relative refractive index and optical density.",
    "explanation": "The relative refractive index is 0.85. Since it's < 1, the speed of light in medium B is greater than in medium A. Medium B is therefore optically rarer than medium A, causing the refracted ray to bend away from the normal.",
    "difficulty": 2
  },
  {
    "prompt": "A beam of light traveling in water (nw = 1.33) is incident obliquely onto a flat glass block (ng = 1.50). What is the refractive index of glass with respect to water (ngw)?",
    "answer": "1.128",
    "question_type": "both",
    "options": [
      "0.887",
      "1.128",
      "2.000",
      "0.170"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Relative refractive index ngw = ng / nw.",
    "explanation": "The relative refractive index is given by: ngw = ng / nw = 1.50 / 1.33 = 1.50 / (4/3) = 4.50 / 4 approx 1.128",
    "difficulty": 2
  },
  {
    "prompt": "A student covers the lower half of a convex lens with opaque black paper. How does this affect the image of a candle flame formed on a distant screen?",
    "answer": "The complete image is still formed, but its brightness (intensity) is reduced",
    "question_type": "both",
    "options": [
      "The lower half of the image disappears completely",
      "The top half of the image disappears completely",
      "The complete image is still formed, but its brightness (intensity) is reduced",
      "The image becomes inverted twice and virtual"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Does light from all parts of the object still reach the uncovered part of the lens?",
    "explanation": "Light rays emanate from all points of the object across the entire uncovered upper aperture of the lens. These rays converge to form the complete image, but because only half the surface area collects light, the image's luminous intensity is reduced.",
    "difficulty": 2
  },
  {
    "prompt": "A spherical mirror and a thin spherical lens each have a focal length of -20 cm. In accordance with the New Cartesian Sign Convention, the mirror and lens are:",
    "answer": "Both concave",
    "question_type": "both",
    "options": [
      "Both convex",
      "The mirror is concave and the lens is convex",
      "Both concave",
      "The mirror is convex and the lens is concave"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "By Cartesian convention, which optical devices have a negative focal length?",
    "explanation": "By Cartesian convention, focal lengths measured to the left of the optical origin (against incident light) are negative. A concave mirror has its focus in front (negative), and a concave (diverging) lens has a virtual focus on the object side (negative).",
    "difficulty": 2
  },
  {
    "prompt": "If the linear magnification produced by a spherical mirror is m = -1.5, what are the characteristics of the image?",
    "answer": "Real, inverted, and magnified",
    "question_type": "both",
    "options": [
      "Virtual, erect, and diminished",
      "Virtual, erect, and enlarged",
      "Real, inverted, and magnified",
      "Real, inverted, and diminished"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "What does a negative sign for magnification indicate?",
    "explanation": "A negative sign (m < 0) signifies a real and inverted image formed below the principal axis. An absolute magnitude |m| = 1.5 > 1 signifies an image larger than the object.",
    "difficulty": 2
  },
  {
    "prompt": "Which of the following optical media has the highest optical density according to standard data?",
    "answer": "Diamond (n = 2.42)",
    "question_type": "both",
    "options": [
      "Crown glass (n = 1.52)",
      "Fused quartz (n = 1.46)",
      "Carbon disulphide (n = 1.63)",
      "Diamond (n = 2.42)"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Optical density correlates with refractive index.",
    "explanation": "Optical density is directly proportional to absolute refractive index (n). Diamond has n = 2.42, which is higher than the other listed media.",
    "difficulty": 1
  },
  {
    "prompt": "Light enters obliquely from air into a rectangular glass slab and emerges into air from the opposite parallel face. What is the relation between the angle of incidence (i) and the angle of emergence (e)?",
    "answer": "i = e",
    "question_type": "both",
    "options": [
      "i > e",
      "i < e",
      "i = e",
      "i + e = 90 degrees"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Consider the interfaces being parallel.",
    "explanation": "Because the refracting faces of a rectangular slab are parallel, the angle of refraction at the first surface equals the angle of incidence at the second surface. Consequently, the angle of emergence equals the initial angle of incidence (i = e).",
    "difficulty": 2
  },
  {
    "prompt": "Two thin lenses of powers +3.50 D and -1.50 D are placed in coaxial contact. What is the focal length of the combination?",
    "answer": "+50 cm",
    "question_type": "both",
    "options": [
      "+50 cm",
      "-50 cm",
      "+20 cm",
      "+2.0 m"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "First find the net power, then the focal length.",
    "explanation": "The net power is: P = P1 + P2 = +3.50 D + (-1.50 D) = +2.00 D. The net focal length is: f = 1 / P = 1 / +2.00 m^-1 = +0.50 m = +50 cm.",
    "difficulty": 3
  },
  {
    "prompt": "Why is a convex mirror preferred over a plane mirror as a vehicle rear-view mirror?",
    "answer": "It provides an erect, diminished image and a significantly wider field of view",
    "question_type": "both",
    "options": [
      "It forms an inverted, enlarged image",
      "It provides an erect, diminished image and a significantly wider field of view",
      "It has zero spherical aberration",
      "It focuses oncoming light onto a sharp focal spot on the windshield"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Think about the type of image and the area covered.",
    "explanation": "A convex mirror curves outward, enabling it to collect light over a wider angle than a flat plane mirror. It always produces an erect, diminished virtual image of traffic behind the vehicle.",
    "difficulty": 2
  },
  {
    "prompt": "An object 3.0 cm high is placed at a distance of 12.0 cm in front of a concave mirror of focal length 8.0 cm. Determine the position of the image and its nature.",
    "answer": "24.0 cm in front of the mirror, real and inverted",
    "question_type": "both",
    "options": [
      "12.0 cm behind the mirror, virtual and erect",
      "24.0 cm in front of the mirror, real and inverted",
      "24.0 cm behind the mirror, virtual and erect",
      "4.8 cm in front of the mirror, real and inverted"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Use the mirror formula: 1/v + 1/u = 1/f.",
    "explanation": "u = -12 cm, f = -8 cm. 1/v = 1/f - 1/u = -1/8 - (-1/12) = -1/8 + 1/12 = -1/24. Thus v = -24 cm. Since v is negative, the image is real and inverted.",
    "difficulty": 3
  },
  {
    "prompt": "A truck is located 6.0 m away from the convex rear-view mirror of an automobile. The mirror has a radius of curvature of 2.0 m. Find the position and nature of the image of the truck.",
    "answer": "0.86 m behind the mirror, virtual and erect",
    "question_type": "both",
    "options": [
      "1.50 m in front of the mirror, real and inverted",
      "3.00 m behind the mirror, virtual and erect",
      "0.86 m behind the mirror, virtual and erect",
      "1.20 m in front of the mirror, virtual and inverted"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Convex mirrors form virtual images behind the mirror. f = R/2.",
    "explanation": "f = +1.0 m, u = -6.0 m. 1/v = 1/f - 1/u = 1/1 - (-1/6) = 1 + 1/6 = 7/6. v = 6/7 = +0.857 m. The image is virtual and erect.",
    "difficulty": 3
  },
  {
    "prompt": "A monochromatic ray of light travels from air into a dense flint glass plate. The absolute refractive index of flint glass is 1.65, and the speed of light in vacuum is 3.00 * 10^8 m/s. What is the speed of light in dense flint glass?",
    "answer": "1.82 * 10^8 m/s",
    "question_type": "both",
    "options": [
      "1.82 * 10^8 m/s",
      "4.95 * 10^8 m/s",
      "2.25 * 10^8 m/s",
      "1.33 * 10^8 m/s"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Speed in medium = speed in vacuum / refractive index.",
    "explanation": "v = c/n = (3.00 * 10^8) / 1.65 approx 1.82 * 10^8 m/s.",
    "difficulty": 2
  },
  {
    "prompt": "A glowing filament 1.5 cm tall is placed in front of a convex lens of focal length 15.0 cm. A sharp real image is captured on a white screen placed on the opposite side of the lens at a distance of 45.0 cm. Determine the distance of the filament from the lens.",
    "answer": "22.5 cm in front of the lens",
    "question_type": "both",
    "options": [
      "11.25 cm in front of the lens",
      "30.0 cm in front of the lens",
      "22.5 cm in front of the lens",
      "60.0 cm in front of the lens"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Use the lens formula: 1/v - 1/u = 1/f.",
    "explanation": "v = +45 cm, f = +15 cm. 1/u = 1/v - 1/f = 1/45 - 1/15 = 1/45 - 3/45 = -2/45. u = -22.5 cm. The filament is 22.5 cm in front of the lens.",
    "difficulty": 3
  },
  {
    "prompt": "A concave lens has a focal length of 20.0 cm. At what distance from the lens must an object be placed so that its virtual image is formed at a distance of 15.0 cm from the lens?",
    "answer": "60.0 cm in front of the lens",
    "question_type": "both",
    "options": [
      "35.0 cm in front of the lens",
      "60.0 cm in front of the lens",
      "8.5 cm in front of the lens",
      "5.0 cm in front of the lens"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "For a concave lens, both focal length and image distance are negative.",
    "explanation": "f = -20 cm, v = -15 cm. 1/u = 1/v - 1/f = -1/15 - (-1/20) = -1/15 + 1/20 = -4/60 + 3/60 = -1/60. u = -60.0 cm. Object distance is 60.0 cm.",
    "difficulty": 3
  },
  {
    "prompt": "A rectangular glass slab of thickness t = 9.0 cm and refractive index n = 1.50 is placed over a black ink spot marked on a sheet of paper. When viewed normally from directly above the top surface of the slab, how far does the ink spot appear to be raised?",
    "answer": "3.0 cm",
    "question_type": "both",
    "options": [
      "6.0 cm",
      "3.0 cm",
      "1.5 cm",
      "4.5 cm"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Apparent rise = Real depth * (1 - 1/n).",
    "explanation": "Apparent depth = 9.0 / 1.50 = 6.0 cm. The rise is the difference between real and apparent depth, so 9.0 - 6.0 = 3.0 cm.",
    "difficulty": 3
  },
  {
    "prompt": "An optical system consists of three thin lenses held in coaxial contact: Lens 1 (+25.0 cm), Lens 2 (-50.0 cm), and Lens 3 (+10.0 cm). What is the equivalent focal length of the combined system?",
    "answer": "+8.33 cm",
    "question_type": "both",
    "options": [
      "+12.0 cm",
      "-8.33 cm",
      "+8.33 cm",
      "+25.0 cm"
    ],
    "category": "Class 10th: Science",
    "tags": "study,curriculum,light",
    "hint": "Convert focal lengths to meters to find powers in Diopters, add them up, then invert for focal length.",
    "explanation": "P1 = 1/+0.25 = +4 D; P2 = 1/-0.50 = -2 D; P3 = 1/+0.10 = +10 D. Total P = 4 - 2 + 10 = +12 D. Equivalent focal length = 1/12 m = +8.33 cm.",
    "difficulty": 3
  }
]

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the last closing bracket of the QUESTIONS array
# It ends with "];"
last_bracket_idx = content.rfind('];')
if last_bracket_idx != -1:
    # Prepare the string to insert
    insert_str = ''
    for q in new_qs:
        insert_str += ',\n  ' + json.dumps(q, indent=2).replace('\n', '\n  ')
    
    # insert_str starts with a comma.
    new_content = content[:last_bracket_idx] + insert_str + '\n' + content[last_bracket_idx:]
    
    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Successfully added the questions to questions.js')
else:
    print('Error: Could not find "];" at the end of the file.')
