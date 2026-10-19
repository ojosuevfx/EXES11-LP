# Prompts para o Flow (Veo) — vídeo de scroll da LP EXES11

Como usar: o vídeo roda em scroll-scrubbing (a barra de rolagem controla o tempo). Por isso o movimento precisa ser **lento, contínuo e numa direção só** (a câmera só avança), sem cortes, sem loop fechado, sem texto nem números na imagem (o Flow erra letras e, por compliance, todo número tem que ser HTML, não vídeo). Gere em 16:9, 8 s, na maior resolução. Depois, se precisar de mais duração, use "Extend" com o mesmo prompt mantendo a direção da câmera.

Paleta a citar sempre: deep navy #1B2B4B, slate blue #374D62, aqua teal #4BA7B3, warm off-white #F4F2ED.

---

## Prompt 1 — Vídeo principal (hero → scroll da página inteira)

Conta a história do conteúdo da LP em 4 fases que casam com as dobras: oferta/capital → obras financiadas (CRI) → carteira diversificada pelo Brasil → rendimento mensal. A câmera só avança.

```
Slow continuous forward dolly, single uninterrupted take, no cuts. Scene 1: a vast minimalist space in deep navy #1B2B4B, soft volumetric light, thousands of thin aqua teal #4BA7B3 vertical light streaks slowly rising like a curtain of light, calm and premium. The camera glides forward and the streaks resolve into Scene 2: an abstract architectural model of modern residential towers under construction, matte off-white #F4F2ED buildings with aqua teal construction cranes and glowing aqua edges, viewed from a low aerial angle, morning light, clean fog. The camera keeps moving forward and rises, Scene 3: the towers multiply into a glowing map made of small aqua teal pins spread across a dark slate-blue #374D62 landscape shaped like Brazil, thin light lines connecting the pins, soft bokeh. The camera continues forward into Scene 4: the pins dissolve into a steady upward stream of small glowing aqua coins and light particles rising calmly, ending on a quiet, bright, elegant composition with lots of negative space on the right side for text. Corporate financial brand film, Montserrat-era minimalism, glass and matte surfaces, no people, no text, no numbers, no logos, no lens flares, smooth constant speed, 24 fps, photorealistic 3D render, 8K.
```

Negative prompt (se o Flow pedir): `text, letters, numbers, logo, watermark, people, faces, fast motion, camera shake, cuts, flashing, red, orange, green, purple`.

---

## Prompt 2 — Loop do hero (fundo atrás do título)

Para rodar atrás do H1 antes de o usuário rolar. Movimento quase imperceptível.

```
Minimal looping background, static camera. A bright off-white #F4F2ED room filled with soft vertical light streaks in pale aqua teal #4BA7B3 fading toward the bottom, like sunlight through tall glass panels. Very slow drift of the streaks to the right, gentle depth-of-field, subtle film grain, nothing else in frame, huge empty center for a headline. Premium fintech brand aesthetic, calm, airy, no text, no objects, no people, seamless loop, 8 seconds.
```

---

## Prompt 3 — "Para onde vai o dinheiro" (seção de projeção)

Antes × depois: a carteira cresce conforme o scroll.

```
Single slow forward push-in, no cuts. Top-down view of a dark slate-blue #374D62 surface. A small cluster of 18 matte off-white #F4F2ED architectural blocks sits in the center with soft aqua teal #4BA7B3 edge glow. As the camera moves closer, new blocks rise smoothly from the surface one after another, growing the cluster into a larger city of 32 blocks, aqua light lines connecting them, gentle particles. Calm, precise, premium financial visualization, soft studio lighting, shallow depth of field, no text, no numbers, no people, constant speed, photorealistic 3D, 8 seconds.
```

---

## Prompt 4 — "Qualidade da carteira" (garantias e obras)

```
Slow lateral tracking shot from left to right, no cuts. Close-up of a modern residential building under construction rendered as a clean architectural model: matte off-white #F4F2ED concrete, glass panels reflecting deep navy #1B2B4B sky, a thin aqua teal #4BA7B3 laser line scanning the facade from bottom to top like a measurement, tiny aqua markers appearing where the line passes. Night-to-dawn lighting, soft fog, cinematic, premium, no text, no people, no logos, smooth constant motion, photorealistic 3D, 8 seconds.
```

---

## Dicas para o Flow

- Gere 2–3 variações de cada prompt e escolha a que tem movimento mais constante (sem acelerar no fim).
- Se aparecer texto ou rosto, regenera: não dá para usar na LP.
- Para scroll-scrubbing, exporte em MP4 H.264 com keyframe a cada frame (ou converta com ffmpeg: `ffmpeg -i in.mp4 -g 1 -c:v libx264 -crf 18 out.mp4`), senão o scrub trava.
- Faça também uma versão 9:16 do Prompt 1 para o mobile.
