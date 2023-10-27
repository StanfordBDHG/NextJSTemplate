//
// This source file is part of the Stanford Biodesign Digital Health TypeScript Template open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Image
        src={`${process.env.basePath || ''}/stanfordbiodesign.png`}
        alt="Stanford Biodesign Logo"
        width={634}
        height={235}
      />
      <h1>
        Welcome to the Stanford Biodesign Digital Health TypeScript Template
      </h1>
    </div>
  )
}
