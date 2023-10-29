//
// This source file is part of the Stanford Biodesign Digital Health Next.js Template open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import Image from 'next/image'
import { generateGreeting } from '@stanfordbdhg/example-package'

export default function Home() {
  const greeting = generateGreeting()

  return (
    <div className="container">
      <Image
        src={`${process.env.basePath || ''}/stanfordbiodesign.png`}
        alt="Stanford Biodesign Logo"
        width={634}
        height={235}
      />
      <h1>{`${greeting.message} to the ${greeting.project}`}</h1>
    </div>
  )
}
