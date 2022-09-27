Doctor.delete_all

3.times do
  doctor = Doctor.create(
      name: Faker::Name.name,
      position: Faker::Job.position,
      npi: Faker::Number.number(digits: 4)
  )
end