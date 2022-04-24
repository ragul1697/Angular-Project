import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export interface PolicyDetails {
  certificateNo: string;
  policyNo: string;
  premiumStatus: string;
  policyStatus: string;
  agentNo: number;
  agentName: string;
  agentType: string;
  customerRefNo: number;
  companyCode: number;
  companyBranch: string;
}

export interface GeneralEnquiry {
  ge_customerRefNo: string;
  ge_customerIDNo: string;
  ge_customerEPFNo: string;
  givenName: string;
  ge_dateofBirth: string;
  ge_MobilePhone: string;
  description: string;
}

const ELEMENT_DATA: PolicyDetails[] = [
  {
    policyNo: 'GL200807197021',
    certificateNo: 'GL200807197021 -1 - self',
    premiumStatus: 'In - Force',
    policyStatus: 'In - Force',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
  {
    policyNo: 'GL200807197022',
    certificateNo: 'GL200807197022 -1 - self',
    premiumStatus: 'In - Force',
    policyStatus: 'In - Force',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
  {
    policyNo: 'GL200807197023',
    certificateNo: 'GL200807197023 -1 - self',
    premiumStatus: 'Group Policy Terminate',
    policyStatus: 'In - Force',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
  {
    policyNo: 'GL200807197024',
    certificateNo: 'GL200807197024 -1 - self',
    premiumStatus: 'Group Policy Terminate',
    policyStatus: 'Death',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
  {
    policyNo: 'GL200807197025',
    certificateNo: 'GL200807197025 -1 - self',
    premiumStatus: 'Group Policy Terminate',
    policyStatus: 'In - Force',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
  {
    policyNo: 'GL200807197026',
    certificateNo: 'GL200807197026 -1 - self',
    premiumStatus: 'Group Policy Terminate',
    policyStatus: 'Group Policy Terminate',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
  {
    policyNo: 'GL200807197027',
    certificateNo: 'GL200807197027 -1 - self',
    premiumStatus: 'Group Policy Terminate',
    policyStatus: 'In - Force',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
  {
    policyNo: 'GL200807197028',
    certificateNo: 'GL200807197028 -1 - self',
    premiumStatus: 'Group Policy Terminate',
    policyStatus: 'Group Policy Terminate',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
  {
    policyNo: 'GL200807197029',
    certificateNo: 'GL200807197029 -1 - self',
    premiumStatus: 'Group Policy Terminate',
    policyStatus: 'Death',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
  {
    policyNo: 'GL200807197030',
    certificateNo: 'GL200807197030 -1 - self',
    premiumStatus: 'Group Policy Terminate',
    policyStatus: 'Group Policy Terminate',
    agentNo: 36477890,
    agentName: 'RidhoTijan',
    agentType: 'Individual',
    customerRefNo: 91234567008,
    companyCode: 321345678,
    companyBranch: 'Lorem Ipsem 13xx',
  },
];

const GE_ELEMENT_DATA: GeneralEnquiry[] = [
  {
    ge_customerRefNo: 'ABCXXX00976438ER',
    ge_customerIDNo: 'ABCXXX00976438ER',
    ge_customerEPFNo: 'ABCXXX00976438ER',
    givenName: 'Ridho Tijan',
    ge_dateofBirth: '01-07-1974',
    ge_MobilePhone: '03-21345678',
    description: 'Lorem Ipsem sample content',
  },
  {
    ge_customerRefNo: 'ABCXXX00976438ER',
    ge_customerIDNo: 'ABCXXX00976438ER',
    ge_customerEPFNo: 'ABCXXX00976439ER',
    givenName: 'Ridho Tijan',
    ge_dateofBirth: '01-07-1974',
    ge_MobilePhone: '03-21345678',
    description: 'Lorem Ipsem sample content',
  },
  {
    ge_customerRefNo: 'ABCXXX00976438ER',
    ge_customerIDNo: 'ABCXXX00976438ER',
    ge_customerEPFNo: 'ABCXXX00976440ER',
    givenName: 'Ridho Tijan',
    ge_dateofBirth: '01-07-1974',
    ge_MobilePhone: '03-21345678',
    description: 'Lorem Ipsem sample content',
  },
  {
    ge_customerRefNo: 'ABCXXX00976438ER',
    ge_customerIDNo: 'ABCXXX00976438ER',
    ge_customerEPFNo: 'ABCXXX00976441ER',
    givenName: 'Ridho Tijan',
    ge_dateofBirth: '01-07-1974',
    ge_MobilePhone: '03-21345678',
    description: 'Lorem Ipsem sample content',
  },
  {
    ge_customerRefNo: 'ABCXXX00976438ER',
    ge_customerIDNo: 'ABCXXX00976438ER',
    ge_customerEPFNo: 'ABCXXX00976442ER',
    givenName: 'Ridho Tijan',
    ge_dateofBirth: '01-07-1974',
    ge_MobilePhone: '03-21345678',
    description: 'Lorem Ipsem sample content',
  },
  {
    ge_customerRefNo: 'ABCXXX00976438ER',
    ge_customerIDNo: 'ABCXXX00976438ER',
    ge_customerEPFNo: 'ABCXXX00976443ER',
    givenName: 'Ridho Tijan',
    ge_dateofBirth: '01-07-1974',
    ge_MobilePhone: '03-21345678',
    description: 'Lorem Ipsem sample content',
  },
  {
    ge_customerRefNo: 'ABCXXX00976438ER',
    ge_customerIDNo: 'ABCXXX00976438ER',
    ge_customerEPFNo: 'ABCXXX00976444ER',
    givenName: 'Ridho Tijan',
    ge_dateofBirth: '01-07-1974',
    ge_MobilePhone: '03-21345678',
    description: 'Lorem Ipsem sample content',
  },
];

@Component({
  selector: 'app-general-enquiry',
  templateUrl: './general-enquiry.component.html',
  styleUrls: ['./general-enquiry.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class GeneralEnquiryComponent implements OnInit {
  generalEnquiryColumns: string[] = [
    'ge_customerRefNo',
    'ge_customerIDNo',
    'ge_customerEPFNo',
    'givenName',
    'ge_dateofBirth',
    'ge_MobilePhone',
  ];
  displayedColumns: string[] = [
    'policyNo',
    'certificateNo',
    'premiumStatus',
    'policyStatus',
    'agentNo',
    'agentName',
    'agentType',
    'customerRefNo',
    'companyCode',
    'companyBranch',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ge_dataSource = new MatTableDataSource(GE_ELEMENT_DATA);
  isChecked = false;
  expandedElement: GeneralEnquiry | null;

  formGroupSearch = new FormGroup({
    givenName: new FormControl(),
    enterIdenNo: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    dob: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    officePhone: new FormControl(),
    fax: new FormControl(),
  });

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.ge_dataSource.sort = this.sort;
    this.ge_dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  //Accordion panel open
  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  ngOnInit(): void {}
}
