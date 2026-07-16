import { test, expect } from '@playwright/test';
// Helper function to attach screenshots to the HTML report
async function capture(page, testInfo, name) {
    const screenshot = await page.screenshot({
        fullPage: true
    });

    await testInfo.attach(name, {
        body: screenshot,
        contentType: 'image/png'
    });
}

test('SMIS Complete Navigation Test', async ({ page }, testInfo) => {

    // Home Page
    await page.goto('http://localhost:8080/',{
	    waitUntil: 'networkidle',
	    timeout: 120000
    });
    await capture(page, testInfo, '01-home-page');

    // Login as Demo
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('demo');
    await page.getByRole('textbox', { name: 'Password' }).fill('demo');
    await capture(page, testInfo, '02-demo-credentials');

    await page.getByRole('button', { name: 'Sign In' }).click();
    await capture(page, testInfo, '03-demo-dashboard');

    // Dashboard Widget
    await page.locator('.icon > .fa').first().click();
    await page.getByRole('link', { name: 'More info ' }).first().click();
    await capture(page, testInfo, '04-dashboard-widget');

    await page.getByRole('button', { name: ' Previous' }).click();

    // Students
    await page.getByRole('link', { name: ' Students' }).click();
    await capture(page, testInfo, '05-students-page');

    await page.getByRole('textbox', { name: 'Quick Search' }).click();

    // Courses
    await page.getByRole('link', { name: ' Courses' }).click();
    await capture(page, testInfo, '06-courses-page');

    // Attendance
    await page.getByRole('link', { name: ' Attendance Record' }).click();
    await capture(page, testInfo, '07-attendance-page');

    // Academic Year
    await page.getByRole('link', { name: ' Academic Year' }).click();
    await capture(page, testInfo, '08-academic-year');

    // Marks
    await page.getByRole('link', { name: ' Marks' }).click();
    await capture(page, testInfo, '09-marks-page');

    // Dashboard
    await page.getByRole('link', { name: ' Dashboard' }).click();

    // Attendance Details
    await page.getByRole('link', { name: 'More info ' }).nth(1).click();
    await page.getByRole('link', { name: ' Attendance Record' }).click();
    await page.locator('#attendance-student-1')
        .getByRole('link', { name: 'Anwar Moha' })
        .click();
    await capture(page, testInfo, '10-student-attendance');

    await page.getByRole('button', { name: ' Back' }).click();

    // Dashboard
    await page.getByRole('link', { name: ' ACTIONS ' }).click();
    await page.getByRole('link', { name: ' Dashboard' }).click();

    // Marks Details
    await page.getByRole('paragraph').filter({ hasText: 'Marks' }).click();
    await page.getByRole('link', { name: 'More info ' }).nth(3).click();
    await capture(page, testInfo, '11-marks-details');

    // Logout Demo User
    await page.getByRole('link', { name: ' ACTIONS ' }).click();
    await page.getByRole('link', { name: ' Sign Out' }).click();
    await capture(page, testInfo, '12-demo-logout');

    // Login as Ronald
    await page.getByRole('textbox', { name: 'Username' }).fill('ronald');
    await page.getByRole('textbox', { name: 'Password' }).fill('ronald');
    await capture(page, testInfo, '13-admin-credentials');

    await page.getByRole('button', { name: 'Sign In' }).click();
    await capture(page, testInfo, '14-admin-dashboard');

    // Admin Area
    await page.getByRole('link', { name: ' Admin Area' }).click();

    // Members
    await page.getByRole('link', { name: ' Members' }).click();
    await capture(page, testInfo, '15-members-page');

    // User Area
    await page.getByRole('link', { name: "User's area" }).click();
    await capture(page, testInfo, '16-user-area');

    // Groups
    await page.getByRole('link', { name: ' Admin Area' }).click();
    await page.getByRole('link', { name: ' Groups' }).click();
    await capture(page, testInfo, '17-groups-page');

    // Members Again
    await page.getByRole('link', { name: ' Members' }).click();
    await capture(page, testInfo, '18-members-again');

    // Utilities
    await page.getByRole('link', { name: ' Utilities' }).click();
    await capture(page, testInfo, '19-utilities-page');

    // Logout
    await page.getByRole('link', { name: ' Sign out' }).click();
    await capture(page, testInfo, '20-admin-logout');
});
