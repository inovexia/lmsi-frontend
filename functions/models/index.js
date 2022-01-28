const db = require('mongoose'),
  membersSchema = include('models/schema/members'),
  rolesSchema = include('models/schema/members/roles'),
  membersMediaSchema = include('models/schema/members/media'),
  membersInvitesSchema = include('models/schema/members/invites'),
  membersQualificationSchema = include('models/schema/members/qualification'),
  membersInfoSchema = include('models/schema/members/info'),
  membersAddressSchema = include('models/schema/members/address'),
  institutesSchema = include('models/schema/institutes'),
  institutesMemberSchema = include('models/schema/institutes/member'),
  institutesSlotSchema = include('models/schema/institutes/slot')

exports.Role = db.model('Role', db.Schema(rolesSchema))

exports.Member = db.model('Member', db.Schema(membersSchema))

exports.MemberMedia = db.model('MemberMedia', db.Schema(membersMediaSchema))

exports.MemberInvite = db.model('MemberInvite', db.Schema(membersInvitesSchema))

exports.MemberQualification = db.model(
  'MemberQualification',
  db.Schema(membersQualificationSchema)
)

exports.MemberQualification = db.model(
  'MemberInfo',
  db.Schema(membersInfoSchema)
)

exports.MemberAddress = db.model(
  'MemberAddress',
  db.Schema(membersAddressSchema)
)

exports.Institute = db.model('Institute', db.Schema(institutesSchema))

exports.InstituteMember = db.model(
  'InstituteMember',
  db.Schema(institutesMemberSchema)
)

exports.InstituteSlot = db.model(
  'InstituteSlot',
  db.Schema(institutesSlotSchema)
)
